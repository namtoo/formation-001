import React from 'react'
import {Utils} from "../../helper/Utils.jsx";
import Panel from "../Panel.jsx";
import {getParentId} from "../../helper/Constants.jsx";

export default function Divider({TREEID}) {
    const utils = Utils()
    const parentId =getParentId(TREEID)
    const zoneGeometry = utils.zoneGeometryMap.get(TREEID)
    const [zoneWidth, zoneHeight, zoneDepth] = zoneGeometry.dimensions
    const anglZone = utils.anglZoneMap.get(parentId)
    const {DIVDIR} = anglZone
    const dividerThk = utils.getMatThk(TREEID).dividerThk

    const dividerDimX = DIVDIR === 'H' ? dividerThk : zoneWidth
    const dividerDimY = DIVDIR === 'V' ? dividerThk : zoneHeight
    const dividerDimZ = zoneDepth

    const dividerPosX = DIVDIR === 'H' ?   - zoneWidth/2 - dividerThk/2 : 0
    const dividerPosY =  DIVDIR === 'V' ?  - zoneHeight/2 -  dividerThk/2 : 0
    const dividerPosZ = 0


    return (
        <>
            {
                !TREEID.endsWith('0') &&
                <Panel position={[dividerPosX,dividerPosY,dividerPosZ]} dimension={[dividerDimX, dividerDimY, dividerDimZ]} color="#ee1414" edgesColor="#ee1414"/>
            }
        </>

    )
}
