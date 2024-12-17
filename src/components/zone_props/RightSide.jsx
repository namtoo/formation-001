import React from 'react'
import {Edges} from "@react-three/drei";
import Panel from "../Panel.jsx";
import {Utils} from "../../helper/Utils.jsx";

export default function RightSide ({TREEID}){

    const utils = Utils()
    const zoneGeometry = utils.zoneGeometryMap.get(TREEID)
    const zoneDimension = zoneGeometry.dimensions
    const [zoneWidth, zoneHeight, zoneDepth] = zoneDimension
    const rightSideThk = utils.getMatThk(TREEID).rightSideThk

    const x = zoneWidth / 2 - rightSideThk / 2
    const y = 0
    const z = 0

    const color="#5be352"
    const edgesColor="#ee1414"

    return (
        <Panel position={[x,y,z]} dimension={[rightSideThk, zoneHeight, zoneDepth]} color={color} edgesColor={edgesColor} />
    )
}