const imageSizes = {
  xs: { width: 256, height: height(256) },
  sm: { width: 352, height: height(352) },
  md: { width: 464, height: height(464) },
  lg: { width: 256, height: height(256) },
  xl: { width: 160, height: height(160) },
  xxl: { width: 288, height: height(288) },
  xxxl: { width: 608, height: height(608) },
  oi: { width: null, height: null },
};

function height(width) {
  return (width * 9) / 16;
}

module.exports = imageSizes;
