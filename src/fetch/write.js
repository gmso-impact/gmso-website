const fs = require("fs");

// write to JSON file
const writeFile = function ({content, path}) {
  console.log("gmsoStoreies begin write");

  const file = {
    dateString: new Date().toString(),
    date: new Date(),
    recordsCount: content.response.length,
    ...content,
  };
  fs.writeFile(path, JSON.stringify(file, null, 2), (err) => {
    if (err) {
      console.log("gmsoStories error writing");
      console.error(err);
      return;
    }
    //file written successfully
    console.log("gmsoStories end write");
  });
};
module.exports = writeFile;
