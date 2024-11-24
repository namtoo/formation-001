import {useArticleData} from "./ArticleProvider.jsx";
import {
    extractNumValue,
    getArticleDimensions,
    getBottomShelfThk,
    getDividerThk,
    getLeftSideThk, getParentID,
    getRightSideThk,
    getTopShelfThk
} from "./Helper.jsx";
import {scaleFactor} from "./Constants.jsx";

export const Calculator = (TREEID) => {
    console.log('=============> Calculator <============')
    const {anglZoneMap} = useArticleData()
    const parentZoneId = getParentID(TREEID)

    const geo = {}
    const parentLeftSideThk = getLeftSideThk(parentZoneId)
    const parentRightSideThk = getRightSideThk(parentZoneId)
    const parentTopShelfThk = getTopShelfThk(parentZoneId)
    const parentBottomShelfThk = getBottomShelfThk(parentZoneId)

    if (TREEID === "0") {
        console.log(" ========> if 0 <===========")
        geo.dimension = getArticleDimensions()
        geo.position = [0, 0, 0]
        anglZoneMap.get(TREEID).geo = geo
        return anglZoneMap.get(TREEID)

    } else {
        console.log("============> Else ===============")
        console.log('Zone ID', TREEID)
        const parentZoneId = TREEID.substring(0, TREEID.lastIndexOf('.'))
        const parentLinDiv = anglZoneMap.get(parentZoneId).LINDIV1
        const sections = parentLinDiv.split(":")
        const totalRatio = sections.reduce((acc, currentValue) => isNaN(currentValue) ? acc : acc + Number(currentValue), 0)
        const fixedWiths = sections.filter(value => isNaN(value))
        const fixedTotal = fixedWiths.reduce((acc, currentValue) => acc + extractNumValue(currentValue) * scaleFactor, 0)

        const [parentWidth, parentHeight, parentDepth] = anglZoneMap.get(parentZoneId).geo.dimension
        const remainingWith = parentWidth - parentLeftSideThk - parentRightSideThk
        const remainingHeight = parentHeight - parentTopShelfThk - parentBottomShelfThk

        const parentDividerThk = getDividerThk(parentZoneId)
        const subtractedTHK = (sections.length - 1) * parentDividerThk

        const parentDividerDir = anglZoneMap.get(parentZoneId).DIVDIR


        const remainingSpace = parentWidth //- parentLeftSideThk - parentRightSideThk - subtractedTHK - fixedTotal
        const results = [];
        let currentPosition = - parentWidth / 2


        sections.map((value, index) => {
            let width = isNaN(value) ? extractNumValue(value) * scaleFactor : Number(value) * remainingSpace / totalRatio
            results.push({start: currentPosition, end: currentPosition + width});


            const height = remainingHeight
            const depth = parentDepth

            // if (index < sections.length - 1) {
            //     currentPosition += parentDividerThk;
            // }
            currentPosition += width;

            const posX = results[index].start

            console.log(
                'totalRatio', totalRatio,
                '\nparentWidth', parentWidth,
                '\nfixedWiths', fixedWiths,
                '\nfixedTotal', fixedTotal,
                '\nsubtractedTHK', subtractedTHK,
                '\nremainingSpace', remainingSpace,
                '\nwidth', width,
                '\nposX', posX
            )

            geo.dimension = [width, height, depth]
            geo.position = [results[index].start, 0, 0]


            anglZoneMap.get(TREEID).geo = geo
            return anglZoneMap.get(TREEID)
        })
        console.log(results)
        return anglZoneMap.get(TREEID)
    }
}