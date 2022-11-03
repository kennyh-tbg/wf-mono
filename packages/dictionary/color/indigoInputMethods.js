/** @enum */
const IndigoInputMethods = {
  GMG: {
    WHITE_INK: "GMG_CMYK+W",
    EPM: "GMG_CMY",
    CMYK: "GMG_CMYK",
    CMYKOVG: "GMG_CMYK+OVG",
    CMYKO: "GMG_CMYK+OVG",
    CMYKV_5_INKS: "GMG_CMYK+V",
    CMYKV_7_INKS: "GMG_CMYK+OVG",
    SLEEKING: "GMG_CMYK_SLEEK",
  },
  ORIS: {
    EPM: "",
    SLEEKING: "SLEEKING_DUPLEX",
    SLEEKING_WHITE_INK: "SLEEKING_DUPLEX+W",
    SPOT_ORANGE: "ORIS_CMYK+O",
    SPOT_ORANGE_WHITE: "ORIS_CMYK+O+W",
    SPOT_BLUE: "ORIS_CMYK+B",
    SPOT_BLUE_WHITE: "ORIS_CMYK+B+W",
    SPOT_WHITE: "ORIS_CMYK+W",
  },
};
module.exports = { IndigoInputMethods };
