import {useArticleData} from "./ArticleProvider.jsx";
import {scaleFactor} from "./Constants.jsx";

export function getArticleDimensions() {
    const {anglPrimMap} = useArticleData()
    const articleData = anglPrimMap.get('TEST_OAL_CAB_CONV_001')
    const width = Number(articleData.SIZEX) * scaleFactor
    const depth = Number(articleData.SIZEY) * scaleFactor
    const height = Number(articleData.SIZEZ) * scaleFactor
    return [width, depth, height]
}

export function getElementThk(id) {
    const {anglElemMap} = useArticleData()
    // console.log('getElementThk = ', id, '  // thk = ',anglElemMap.get(id)?.CPNAME ? 10 * scaleFactor : 0)
    return anglElemMap.get(id)?.CPNAME ? 10 * scaleFactor : 0
}

export const getLeftSideThk = (parentID) => getElementThk(parentID + ".3")

export const getRightSideThk = (parentID) => getElementThk(parentID + ".1")

export function getTopShelfThk(id) {
    const {anglZoneMap} = useArticleData()
    return anglZoneMap.get(id)?.TOPSHELF ? 10 * scaleFactor : 0
}

export function getBottomShelfThk(id) {
    const {anglZoneMap} = useArticleData()
    return anglZoneMap.get(id)?.BOTSHELF ? 10 * scaleFactor : 0
}

export function getDividerThk(id) {
    const {anglZoneMap} = useArticleData()
    return anglZoneMap.get(id)?.DIVIDER ? 10 * scaleFactor : 0
}

export function getDividerType(id){
    const {anglZoneMap} = useArticleData()
    return anglZoneMap.get(id)?.DIVTYPE
}

export function getDividerInfo(zone){
    const {TREEID} = zone
    const [zoneWidth, zoneHeight, zoneDepth] = zone.geo.dimension
    const [zonePosX, zonePosY, zonePosZ] = zone.geo.position
    const dividerThk = getDividerThk(getParentID(TREEID))
    const zoneIndex = TREEID.substring(TREEID.lastIndexOf('.')+1,TREEID.lastIndexOf('.')+2)

    const dividerType = getDividerType(getParentID(TREEID))
    const dividerLength = dividerType === 'P' ? zoneHeight : zoneWidth
    const dividerWidth = zoneDepth
    const posX = dividerType === 'P' ? zonePosX -zoneWidth/2 - dividerThk/2: 0
    const posY = dividerType === 'F' ? zonePosY - zoneHeight/2 - dividerThk/2 :0
    const posZ = 0

    return {
        type:dividerType,
        thk:dividerThk,
        length:dividerLength,
        width:dividerWidth,
        position:[posX, posY, posZ],
        zoneIndex:zoneIndex
    }
}

export const getParentID = (id) => id === '0' ? id : id.substring(0, id.lastIndexOf('.'))

export function extractNumValue(str){
    return parseInt(str.match(/\d+/)[0]);
}