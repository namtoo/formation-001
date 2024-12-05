 import {scaleFactor} from "./Constants.jsx";
export const getArticleDimensions = (anglPrimMap) => {
    const articleWidth = anglPrimMap.get('TEST_OAL_CAB_CONV_001').SIZEX * scaleFactor
    const articleHeight = anglPrimMap.get('TEST_OAL_CAB_CONV_001').SIZEY * scaleFactor
    const articleDepth = anglPrimMap.get('TEST_OAL_CAB_CONV_001').SIZEZ * scaleFactor
    return [articleWidth, articleHeight, articleDepth]
}