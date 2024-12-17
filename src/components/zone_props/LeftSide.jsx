import React from 'react'
import Panel from "../Panel.jsx";
import {Utils} from "../../helper/Utils.jsx";

export default function LeftSide ({TREEID}){

    const utils = Utils()
    const zoneGeometry = utils.zoneGeometryMap.get(TREEID)
    const zoneDimension = zoneGeometry.dimensions
    const [zoneWidth, zoneHeight, zoneDepth] = zoneDimension
    const leftSideThk = utils.getMatThk(TREEID).leftSideThk

    const x = - zoneWidth / 2 + leftSideThk / 2
    const y = 0
    const z = 0

    const color="#5be352"
    const edgesColor="#ee1414"

    return (
        <Panel position={[x,y,z]} dimension={[leftSideThk, zoneHeight, zoneDepth]} color={color} edgesColor={edgesColor} />
    )
}