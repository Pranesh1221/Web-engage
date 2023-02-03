nunjucks = require("nunjucks"); // importing the nunjucks
nunjucks.configure({ autoescape: true }); //configuring the nunjucks
let helloWorld = nunjucks.renderString("Hello Bro {{name}}", {
  name: "sagar kothadiya",
}); 
console.log(helloWorld); 
