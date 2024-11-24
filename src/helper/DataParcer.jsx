export default function DataParcer(anglPrim, anglZone, anglElem) {
    console.log("============> DataParcer <============")
    const anglZoneMap = new Map();

    anglZone.map((zone, index)=>{
        anglZoneMap.set(zone.TREEID, zone)
    })

    const anglElemMap = new Map();

    anglElem.map((elem, index)=>{
        anglElemMap.set(elem.TREEID, elem)
    })

    const anglPrimMap = new Map();

    anglPrim.map((prim, index)=>{
        anglPrimMap.set(prim.NAME, prim)
    })

    return {
        anglPrimMap,
        anglZoneMap,
        anglElemMap
    }
}