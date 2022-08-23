const fetch = require("node-fetch");
const fs = require("fs");
const sharp = require("sharp");
const imageSizes = require("../helper/imagesSizes")

const rootPath = "./public/stories";

async function downloadImages({ stories }) {
  console.log(`Begin downloading images`);
  console.log(imageSizes);
  makeDirectories(rootPath);
  const imagesMetadata = stories.reduce(getImagesMetadata, []);
  imagesMetadata.forEach(downloadImage);
}
function makeDirectories(path) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
}

function getImagesMetadata(imagesMetadata, story) {
  if (!story.fields["Story Card Image"]) {
    return imagesMetadata;
  } else {
    const cardImage = {
      storyId: story.id,
      "en-StoryTitle": story.fields["en-StoryTitle"],
      type: "cardImage",
      ext: getExt(story.fields["Story Card Image"][0]),
      newFilename: getFilename(story.fields["Story Card Image"][0]),
      ...story.fields["Story Card Image"][0],
    };
    return [...imagesMetadata, cardImage];
  }
}
function getFilename(imageMetadata) {
  return imageMetadata.id;
  const name = imageMetadata.filename.replace(/[^a-z0-9]/gi, "");
  if (name === "") {
    console.log(
      `Bad file name ${imageMetadata.filename} for image id ${imageMetadata.id}`
    );
  }
  return name;
}
function getExt(imageMetadata) {
  if (imageMetadata.type === "image/jpeg") {
    return "jpg";
  }
  if (imageMetadata.type === "image/png") {
    return "png";
  } else {
    console.log(
      `Bad file extension ${imageMetadata.type} in ${getFilename(
        imageMetadata
      )}`
    );
  }
}
async function downloadImage(imageMetadata) {
  //console.log(`Downloading ${path}`)
  const response = await fetch(imageMetadata.url);
  const folder = rootPath; // `${rootPath}/${imageMetadata.storyId}`;
  makeDirectories(folder);

  // write origional image
  //response.body.pipe(fs.createWriteStream(`./public/images/origional/${imageMetadata.newFilename}.${imageMetadata.ext}`))

  Object.entries(imageSizes).forEach(async ([key, value]) => {
    const fullPath = `${folder}/${imageMetadata.newFilename}-${key}.${imageMetadata.ext}`;
    const transformer = sharp()
      .resize(value)
      .toFormat(imageMetadata.ext)
      .toFile(fullPath, (err, info) => {
        if (err) {
          console.log(err);
        }
        if (info) {
          console.log(info);
        }
      });

    response.body.pipe(transformer);
  });
}

module.exports = downloadImages;
