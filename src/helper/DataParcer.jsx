export default function DataParcer(anglPrim, anglZone, anglElem) {
    const anglPrimMap = new Map()
    const anglZoneMap = new Map()
    const anglElemMap = new Map()
    const zoneGeometryMap = new Map()

    anglPrim.map((value) => anglPrimMap.set(value.NAME, value))
    anglZone.map((value) => anglZoneMap.set(value.TREEID, value))
    anglElem.map((value) => anglElemMap.set(value.TREEID, value))
    return {
        anglPrimMap,
        anglZoneMap,
        anglElemMap,
        zoneGeometryMap
    }
}