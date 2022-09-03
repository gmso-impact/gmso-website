const imageSizes = {
  xs: { width: 128, height: height(128) },
  sm: { width: 128, height: height(128) },
  md: { width: 128, height: height(128) },
  lg: { width: 640, height: height(640) },
  xl: { width: 160, height: height(160) },
  xxl: { width: 960, height: height(960) },
  oi: { width: null, height: null },
};

function height(width) {
  return (width * 9) / 16;
}

//export default imageSizes
module.exports = imageSizes;
