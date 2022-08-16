const fetch = require("node-fetch");
const fs = require("fs");
const sharp = require('sharp');

function height(width) {
    return width * 9 / 16
}

const breakpoints = {
    xs: { width: 128, height: height(128), },
    sm: { width: 128, height: height(128), },
    md: { width: 128, height: height(128), },
    lg: { width: 640, height: height(640), },
    xl: { width: 320 , height: height(320), },
    xxl: { width: 960, height: height(960), },
    oi: { width: null, height: null, },
}

async function downloadImages({ stories, path }) {
    console.log(`Begin downloading images`);
    console.log(breakpoints)
    makeDirectories(path)
    const imagesMetadata = stories.reduce(getImagesMetadata, [])
    imagesMetadata.forEach(downloadImage)

}
function makeDirectories(path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path);
    }
    if (!fs.existsSync(`${path}/origional`)) {
        fs.mkdirSync(`${path}/origional`);
    }
    Object.keys(breakpoints).forEach((breakpoint) => {
        if (!fs.existsSync(`${path}/${breakpoint}`)) {
            fs.mkdirSync(`${path}/${breakpoint}`);
        }
    });
}

function getImagesMetadata(imagesMetadata, story) {
    if (!story.fields['Story Card Image']) {
        return imagesMetadata
    } else {


        const cardImage = {
            storyId: story.id,
            "en-StoryTitle": story.fields['en-StoryTitle'],
            type: 'cardImage',
            ext: getExt(story.fields['Story Card Image'][0]),
            newFilename: getFilename(story.fields['Story Card Image'][0]),
            ...story.fields['Story Card Image'][0],

        }
        return [...imagesMetadata, cardImage]
    }
}
function getFilename(imageMetadata) {
    const name = imageMetadata.filename.replace(/[^a-z0-9]/gi, '')
    if (name === '') {
        console.log(`Bad file name ${imageMetadata.filename} for image id ${imageMetadata.id}`)
    }
    return name
}
function getExt(imageMetadata) {
    if (imageMetadata.type === "image/jpeg") { return 'jpg' }
    if (imageMetadata.type === "image/png") { return 'png' }
    else {
        console.log(`Bad file extension ${imageMetadata.type} in ${getFilename(imageMetadata)}`)
    }

}
async function downloadImage(imageMetadata) {
    //console.log(`Downloading ${path}`)
    const response = await fetch(imageMetadata.url)
    

    // write origional image
    //response.body.pipe(fs.createWriteStream(`./public/images/origional/${imageMetadata.newFilename}.${imageMetadata.ext}`))


    

    Object.entries(breakpoints).forEach(async ([key, value])=>{
        const path = `./public/images/${key}/${imageMetadata.newFilename}.${imageMetadata.ext}`
        const transformer = sharp().resize(value)
        .toFormat(imageMetadata.ext)
        .toFile(path, (err, info) => {
            if(err){
                console.log(err)
            }
            if(info){
                console.log(info)
            }
        });
    
        response.body.pipe(transformer)
    })
}



module.exports = downloadImages;
