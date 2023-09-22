const babel = require("@babel/core");
const satori = require("satori").default;
const { Resvg } = require("@resvg/resvg-js");
const { readFile, writeFile } = require("fs/promises");
const { mkdirSync, existsSync } = require("fs");
const { theme } = require("./tailwind.config.js");
const { glob } = require("glob");
const matter = require("gray-matter");

async function compileComponentCode() {
  const code = await babel.transformFileSync("./src/Card.tsx", {
    ast: false,
    plugins: ["@babel/plugin-transform-modules-commonjs"],
  }).code;

  return code;
}

async function prepareDir() {
  const dir = "./static/cards";
  const doesDirExist = existsSync(dir);
  if (!doesDirExist) {
    mkdirSync(dir);
  }
}

async function main() {
  const [fontDataNormal, fontDataBold, componentCode] = await Promise.all([
    readFile("./static/fonts/DMSans_18pt-Regular.ttf"),
    readFile("./static/fonts/DMSans_18pt-Bold.ttf"),
    compileComponentCode(),
  ]);

  prepareDir();

  const card = eval(componentCode.replaceAll("className", "tw"));

  const mdxFilePaths = await glob(
    "./docs/{cli,internal,intro,language}/**/*.mdx",
  );

  for (const mdxFilePath of mdxFilePaths) {
    const mdx = await readFile(mdxFilePath, "utf-8");
    const frontmatter = matter(mdx);

    const title = frontmatter.data.title || mdx.match(/(?<=^# ).*/m)?.[0] || "";

    const sections = {
      intro: "OpenTofu Introduction",
      language: "OpenTofu Language",
      cli: "OpenTofu CLI",
      internal: "OpenTofu Internals",
    };

    const sectionKey = Object.keys(sections).find((section) =>
      mdxFilePath.startsWith(`docs/${section}`),
    );

    const section = sections[sectionKey];

    const svg = await satori(
      card({
        section,
        title,
        description: frontmatter.data.description,
      }),
      {
        fonts: [
          {
            name: "DM Sans",
            data: fontDataNormal,
            weight: 400,
            style: "normal",
          },
          {
            name: "DM Sans",
            data: fontDataBold,
            weight: 700,
            style: "normal",
          },
        ],
        tailwindConfig: {
          theme,
        },
      },
    );

    const resvg = new Resvg(svg, {
      fitTo: {
        mode: "width",
        value: 600,
      },
    });
    const image = resvg.render();
    const buffer = image.asPng();

    await writeFile(
      `./static/cards/${mdxFilePath
        .replace("docs/", "")
        .replaceAll("/", "-")
        .replace(".mdx", ".png")}`,
      buffer,
    );
  }
}

main().then(() => console.log("Done"));
