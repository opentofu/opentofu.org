import React from "react";
import Layout from "@theme/Layout";
import Headline from "../components/Headline";
import PatternBg from "../components/PatternBg";
import Button from "../components/Button";
import CNCFLogo from "../components/CNCFLogo";
import Link from "@docusaurus/Link";

export default function Slack() {
  return (
    <Layout title="Join us on Slack">
      <header className="relative min-h-[calc(100vh-8rem)]">
        <PatternBg />

        <div className="container mx-auto px-4 md:px-8 py-16 min-h-[calc(100vh-8rem)] flex flex-col lg:flex-row items-center justify-center">
          <div className="lg:w-1/2 lg:pr-16">
            <div className="flex justify-start mb-8">
              <CNCFLogo />
            </div>
            <div className="text-left">
              <Headline>Join the OpenTofu Community on Slack</Headline>
              <p className="my-8 text-xl text-gray-600 dark:text-gray-400">
                The OpenTofu community is now part of the{" "}
                <strong>
                  Cloud Native Computing Foundation (CNCF) Slack workspace
                </strong>
                . Join thousands of cloud-native practitioners and connect with
                the OpenTofu community.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">
                  What to expect in #opentofu
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>
                    <strong>Community support</strong> - Get help with OpenTofu
                    usage and troubleshooting
                  </li>
                  <li>
                    <strong>Release announcements</strong> - Stay updated on new
                    versions and features
                  </li>
                  <li>
                    <strong>Development discussions</strong> - Participate in
                    conversations about OpenTofu's future
                  </li>
                  <li>
                    <strong>Contributor coordination</strong> - Connect with
                    other contributors and maintainers
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">
                  Other ways to connect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  The OpenTofu community is active across multiple platforms:
                </p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>
                    <Link
                      href="https://github.com/opentofu/opentofu"
                      className="text-brand-500 hover:text-brand-600"
                    >
                      GitHub
                    </Link>{" "}
                    - Source code, issues, and discussions
                  </li>
                  <li>
                    <Link
                      href="https://x.com/opentofuorg"
                      className="text-brand-500 hover:text-brand-600"
                    >
                      X (Twitter)
                    </Link>{" "}
                    - News and updates
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/channel/UCgIzfj9QuWL9HHXIXq2A0Ig"
                      className="text-brand-500 hover:text-brand-600"
                    >
                      YouTube
                    </Link>{" "}
                    - Videos and presentations
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 mt-16 lg:mt-0 lg:pl-16 w-full">
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-8 text-left">
              <h2 className="text-2xl font-bold mb-6">
                Connect with us on Slack
              </h2>

              <div className="flex flex-col gap-4 mb-6">
                <Button
                  variant="primary"
                  href="https://communityinviter.com/apps/cloud-native/cncf"
                  className="w-full"
                >
                  Join CNCF Slack
                </Button>
                <Button
                  variant="secondary"
                  href="https://cloud-native.slack.com/archives/C05PXGAB05R"
                  className="w-full"
                >
                  Go to #opentofu channel
                </Button>
              </div>

              <div className="text-sm text-gray-600 dark:text-gray-400">
                <p className="mb-2">
                  <strong>New to CNCF Slack?</strong> Click "Join CNCF Slack" to
                  get an invitation.
                </p>
                <p>
                  <strong>Already a member?</strong> Click "Go to #opentofu
                  channel" to join our channel directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Layout>
  );
}
