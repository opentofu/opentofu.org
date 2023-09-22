const cheerio = require("cheerio");
const fs = require("fs");

async function sync() {
  const res = await fetch(
    "https://raw.githubusercontent.com/opentofu/manifesto/main/index.html",
  );
  const html = await res.text();
  const $ = cheerio.load(html);

  const supporters = $(".co-signed tbody tr")
    .map((i, el) => {
      const link = $(el).find("td:nth-child(1) a");
      return {
        name: link.text(),
        url: link.attr("href"),
        type: $(el).find("td:nth-child(2)").text(),
        pledge: $(el).find("td:nth-child(3)").text(),
      };
    })
    .get();

  fs.writeFileSync(
    "./supporters.json",
    JSON.stringify(supporters, null, 2) + "\n",
    "utf8",
  );
}

sync();
