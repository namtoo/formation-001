 import {backId, doorId, leftSideId, rightSideId, scaleFactor} from "./Constants.jsx";
 import {useArticleData} from "./ArticleProvider.jsx";

export const getArticleDimensions = (anglPrimMap) => {
    const articleWidth = anglPrimMap.get('TEST_OAL_CAB_CONV_001').SIZEX * scaleFactor
    const articleHeight = anglPrimMap.get('TEST_OAL_CAB_CONV_001').SIZEY * scaleFactor
    const articleDepth = anglPrimMap.get('TEST_OAL_CAB_CONV_001').SIZEZ * scaleFactor
    return [articleWidth, articleHeight, articleDepth]
}
export function Utils() {
   const {anglZoneMap, anglPrimMap, anglElemMap, zoneGeometryMap} = useArticleData()

    const getMatThk =(TREEID) => {
        const doorThk =anglElemMap.get(doorId(TREEID))?.CPNAME ? 2 : 0
        const rightSideThk = anglElemMap.get(rightSideId(TREEID))?.CPNAME  ? 2 : 0
        const backThk = anglElemMap.get(backId(TREEID))?.CPNAME ? 2 : 0
        const leftSideThk = anglElemMap.get(leftSideId(TREEID))?.CPNAME ? 2 : 0
        const topShelfThk = anglZoneMap.get(TREEID).TOPSHELF ? 2 : 0
        const bottomShelfThk = anglZoneMap.get(TREEID).BOTSHELF ? 2 : 0
        const dividerThk = anglZoneMap.get(TREEID).DIVIDER ? 2 : 0
        console.log('doorThk',doorThk,'rightSideThk',rightSideThk,'backThk',backThk,'leftSideThk',leftSideThk,'topShelfThk',topShelfThk,'bottomShelfThk',bottomShelfThk)

        return ({
            doorThk:doorThk,
            rightSideThk:rightSideThk,
            backThk:backThk,
            leftSideThk:leftSideThk,
            topShelfThk:topShelfThk,
            bottomShelfThk:bottomShelfThk,
            dividerThk:dividerThk
        })
    }

    const isCpDefined = (TREEID) => {
        const isDoorDefined =!!anglElemMap.get(doorId(TREEID))?.CPNAME
        const isRightSideDefined = !!anglElemMap.get(rightSideId(TREEID))?.CPNAME
        const isBackDefined = !!anglElemMap.get(backId(TREEID))?.CPNAME
        const isLeftSideDefined = !!anglElemMap.get(leftSideId(TREEID))?.CPNAME
        const isTopShelfDefined = !!anglZoneMap.get(TREEID).TOPSHELF
        const isBottomShelfDefined = !!anglZoneMap.get(TREEID).BOTSHELF
         return (
             {
                 isDoorDefined : isDoorDefined,
                 isRightSideDefined : isRightSideDefined,
                 isBackDefined : isBackDefined,
                 isLeftSideDefined : isLeftSideDefined,
                 isTopShelfDefined : isTopShelfDefined,
                 isBottomShelfDefined : isBottomShelfDefined
             }
         )
    }

    const getRemainingDimensions =(TREEID, initDimension,initPosition )=> {
        const [initWidth,initHeight,initDepth] = initDimension
        const [initX,initY,initZ] = initPosition
        const {doorThk,rightSideThk,leftSideThk,topShelfThk,bottomShelfThk, backThk}  = getMatThk(TREEID)
        const remainingWidth = initWidth - leftSideThk - rightSideThk
        const remainingHeight = initHeight - topShelfThk - bottomShelfThk
        const remainingDepth = initDepth - backThk

        const remainingX = initX - initWidth/2 + remainingWidth/2 + leftSideThk
        const remainingY = initY - initHeight/2 + remainingHeight/2 + bottomShelfThk
        const remainingZ = initZ + backThk/2
        return (
            {
                dimension:[remainingWidth,remainingHeight,remainingDepth],
                position:[remainingX,remainingY,remainingZ]
            }
        )

    }













    return {
        anglPrimMap,
        anglZoneMap,
        anglElemMap,
        zoneGeometryMap,
        getMatThk,
        getRemainingDimensions,
        isCpDefined
    }
}
