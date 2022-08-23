require("dotenv").config();
const readAirtable = require("./read.js");
const writeFile = require("./write.js");
const downloadImages = require("./downloadImages.js");
console.log("start of fetch/start.ts");

// fetch from air table, then write it
readAirtable(
  "https://api.airtable.com/v0/appyTc8xRR9nR9sSB/All%20Stories?view=publicWebsite"
).then((content) => {
  writeFile({ content, path: "./src/assets/allStories.json" });
  // do not add trailing slash '/' on image path
  downloadImages({ stories: content.response });
});
