import React from 'react'
import {Edges} from "@react-three/drei";
import Panel from "../Panel.jsx";
import {Utils} from "../../helper/Utils.jsx";

export default function BackPanel ({TREEID}) {

    const utils = Utils()
    const zoneGeometry = utils.zoneGeometryMap.get(TREEID)
    const zoneDimension = zoneGeometry.dimensions
    const [zoneWidth, zoneHeight, zoneDepth] = zoneDimension
    const backPanelThk = utils.getMatThk(TREEID).backPanelThk

    const x = 0
    const y = 0
    const z = - zoneDepth / 2 + backPanelThk / 2

    const color="#e15a8d"
    const edgesColor="#ee1414"

    return (
        <Panel position={[x,y,z]} dimension={[zoneWidth, zoneHeight, backPanelThk]} color={color} edgesColor={edgesColor} />
    )
}