const nunjucks = require("nunjucks");
const user = require("./user.json");
const fs = require("fs");

nunjucks.configure({
  autoescape: true,
});
nunjucks.configure("data", {
  autoescape: true,
});

let ans = nunjucks.render("index.njk", user);
fs.writeFileSync("./output/index.html", ans);
console.log("success");
