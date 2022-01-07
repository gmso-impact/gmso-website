require("dotenv").config();
const readAirtable = require("./read.js");
const writeFile = require("./write.js");
console.log("start of fetch/start.js");

// fetch from air table, then write it
readAirtable(
  "https://api.airtable.com/v0/appyTc8xRR9nR9sSB/All%20Stories?view=All%20Stories%20View"
).then((content) => {
  writeFile({ content, path: "./src/assets/allStories.json" });
});
content = {
  response: [],
  string: "test file"
}
writeFile({ content, path: "./public/test.json" });
