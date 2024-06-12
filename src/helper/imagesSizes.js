const imageSizes = {
  xs: { width: 320, height: height(320) },
  sm: { width: 320, height: height(320) },
  md: { width: 320, height: height(320) },
  lg: { width: 640, height: height(640) },
  xl: { width: 320, height: height(320) },
  xxl: { width: 960, height: height(960) },
  oi: { width: null, height: null },
};

function height(width) {
  return (width * 9) / 16;
}

//export default imageSizes
module.exports = imageSizes;
