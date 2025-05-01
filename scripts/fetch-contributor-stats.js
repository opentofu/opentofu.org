#!/usr/bin/env node

/**
 * Script to fetch OpenTofu contributor statistics
 *
 * This script fetches contributor data from OpenTofu GitHub repositories
 * and generates a JSON file containing contributor counts.
 *
 * Usage:
 *   node scripts/fetch-contributor-stats.js
 *
 * Note: For more accurate results, you can set a GitHub token:
 *   GITHUB_TOKEN=your_token node scripts/fetch-contributor-stats.js
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

// Configuration
const FORK_DATE = "2023-08-25"; // OpenTofu was officially announced on this date
const OUTPUT_FILE = path.join(
  __dirname,
  "..",
  "src",
  "data",
  "contributor-stats.json",
);
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ""; // Optional GitHub token

// For fallback purposes, let's hardcode the contributor count we found earlier
// If GitHub API access is fixed later, this will be replaced with the actual count
const FALLBACK_CONTRIBUTOR_COUNT = 180;

// Create the data directory if it doesn't exist
const dataDir = path.dirname(OUTPUT_FILE);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Main repositories to check (excluding manifesto, roadmap, .github, legal-documents)
const REPOSITORIES = [
  "opentofu",
  "opentofu.org",
  "brand-artifacts",
  "equivalence-testing",
  "scripts",
  "registry-alpha",
  "registry-address",
  "setup-opentofu",
  "tofu-exec",
  "get.opentofu.org",
  "tfenv",
];

// Helper function to make GitHub API requests
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        "User-Agent": "OpenTofu-Stats-Collector",
        ...(GITHUB_TOKEN && { Authorization: `token ${GITHUB_TOKEN}` }),
      },
    };

    https
      .get(url, options, (response) => {
        if (response.statusCode === 403) {
          console.warn("Rate limit exceeded. Consider using a GitHub token.");
          return resolve([]);
        }

        if (response.statusCode !== 200) {
          return reject(
            new Error(`Request failed with status code ${response.statusCode}`),
          );
        }

        let data = "";

        response.on("data", (chunk) => {
          data += chunk;
        });

        response.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (error) {
            reject(
              new Error(
                `Failed to parse response from ${url}: ${error.message}`,
              ),
            );
          }
        });
      })
      .on("error", (error) => {
        reject(new Error(`Request to ${url} failed: ${error.message}`));
      });
  });
}

// Fetch contributors for a repository after the fork date
async function fetchContributors(repo) {
  console.log(`Fetching contributors for ${repo}...`);
  const contributors = new Set();
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const url = `https://api.github.com/repos/opentofu/${repo}/commits?since=${FORK_DATE}T00:00:00Z&per_page=100&page=${page}`;

    try {
      const commits = await makeRequest(url);

      if (commits.length === 0 || !Array.isArray(commits)) {
        hasMore = false;
        continue;
      }

      // Extract unique contributor logins
      commits.forEach((commit) => {
        if (commit.author && commit.author.login) {
          contributors.add(commit.author.login);
        }
      });

      // If we got fewer than 100 commits, we've reached the last page
      if (commits.length < 100) {
        hasMore = false;
      } else {
        page++;
        // Add a small delay to avoid rate limits
        await new Promise((resolve) => setTimeout(resolve, 500));
      }
    } catch (error) {
      console.error(
        `Error fetching commits for ${repo} (page ${page}):`,
        error.message,
      );
      hasMore = false;
    }
  }

  return Array.from(contributors);
}

// Main function
async function main() {
  console.log(`Gathering contributor statistics since ${FORK_DATE}...`);

  const allContributors = new Set();
  let apiSuccessful = false;

  // Process each repository
  for (const repo of REPOSITORIES) {
    try {
      const contributors = await fetchContributors(repo);
      console.log(`Found ${contributors.length} contributors in ${repo}`);

      contributors.forEach((contributor) => allContributors.add(contributor));

      if (contributors.length > 0) {
        apiSuccessful = true;
      }
    } catch (error) {
      console.error(`Failed to process repository ${repo}:`, error.message);
    }
  }

  // If API requests didn't yield results, use fallback count
  const contributorCount = apiSuccessful
    ? allContributors.size
    : FALLBACK_CONTRIBUTOR_COUNT;

  // Generate stats
  const stats = {
    timestamp: new Date().toISOString(),
    stats: {
      contributors: {
        total: contributorCount,
        as_of_date: FORK_DATE,
      },
    },
  };

  // Save to JSON file
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(stats, null, 2));

  console.log(`\nContributor statistics:`);
  console.log(`Total unique contributors: ${contributorCount}`);
  console.log(`\nSaved stats to ${OUTPUT_FILE}`);

  if (!apiSuccessful) {
    console.warn(
      "\nWarning: GitHub API requests did not return contributor data.",
    );
    console.warn(
      "Using fallback contributor count of",
      FALLBACK_CONTRIBUTOR_COUNT,
    );
    console.warn("For more accurate results, set a GitHub token:");
    console.warn(
      "  GITHUB_TOKEN=your_token node scripts/fetch-contributor-stats.js",
    );
  }
}

main().catch((error) => {
  console.error("Error executing script:", error);
  process.exit(1);
});
