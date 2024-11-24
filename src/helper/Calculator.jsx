import {useArticleData} from "./ArticleProvider.jsx";
import {
    getArticleDimensions,
    getBottomShelfThk,
    getDividerThk,
    getLeftSideThk, getParentID,
    getRightSideThk,
    getTopShelfThk
} from "./Helper.jsx";

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
        geo.dimension = getArticleDimensions()
        geo.position = [0, 0, 0]
        anglZoneMap.get(TREEID).geo = geo
        return anglZoneMap.get(TREEID)

    } else {
        const parentZoneId = TREEID.substring(0, TREEID.lastIndexOf('.'))
        const parentLinDiv = anglZoneMap.get(parentZoneId).LINDIV1
        const parentLinDivTable = parentLinDiv.split(":")
        const totalRatio = parentLinDivTable.reduce((acc, currentValue) => isNaN(currentValue) ? acc : acc + Number(currentValue), 0)
        const [parentWidth, parentHeight, parentDepth] = anglZoneMap.get(parentZoneId).geo.dimension
        const remainingWith = parentWidth - parentLeftSideThk - parentRightSideThk
        const remainingHeight = parentHeight - parentTopShelfThk - parentBottomShelfThk

        const parentDividerThk = getDividerThk(parentZoneId)
        const subtractedTHK = (parentLinDivTable.length - 1) * parentDividerThk

        const parentDividerDir = anglZoneMap.get(parentZoneId).DIVDIR

        parentLinDivTable.map((value, index) => {
            const isFixedValue = isNaN(value)
            const extractedValue = parseInt(value.match(/\d+/)[0]);

            console.log('index', index, 'value', value, 'isFixedValue', isFixedValue, 'extractedValue', extractedValue)
            if (TREEID === parentZoneId+'.'+index) {
                const zoneWidth = parentDividerDir === 'H' ?
                    (remainingWith - subtractedTHK)*value/totalRatio
                    : remainingWith
                const zoneHeight = parentDividerDir === 'V' ? (remainingHeight - subtractedTHK) * value / totalRatio : remainingHeight
                const zoneDepth = parentDepth
                const zonePositionX = parentDividerDir === 'H' ?
                    parentLeftSideThk - parentWidth/2 + zoneWidth/2
                    + parentLinDivTable.slice(0, index).reduce((acc, currentValue) => acc + Number(currentValue), 0)*(remainingWith - subtractedTHK)/totalRatio
                    + parentLinDivTable.slice(0, index).reduce((acc, _) => acc + parentDividerThk, 0)
                    : 0

                const zonePositionY = parentDividerDir === 'V' ?
                    parentTopShelfThk - parentHeight/2 + zoneHeight/2
                    + parentLinDivTable.slice(0, index).reduce((acc, currentValue) => acc + Number(currentValue), 0)*(remainingHeight - subtractedTHK)/totalRatio
                    + parentLinDivTable.slice(0, index).reduce((acc, _) => acc + parentDividerThk, 0)
                    : 0
                geo.dimension = [zoneWidth, zoneHeight, zoneDepth]
                geo.position = [zonePositionX, zonePositionY, 0]

                console.log('TREEID => ',TREEID,'\nParentID',parentZoneId,'\nparentWidth',parentWidth, '\nremainingWith', remainingWith, '\nzoneWidth',zoneWidth,'\nleft side thk', parentLeftSideThk, '\nright side thk => ',parentRightSideThk)

                anglZoneMap.get(TREEID).geo = geo
                return anglZoneMap.get(TREEID)
            }
            return anglZoneMap.get(TREEID)
        })
    }
    return anglZoneMap.get(TREEID)
}