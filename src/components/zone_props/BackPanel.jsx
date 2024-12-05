import React from 'react'
import {Edges} from "@react-three/drei";
import Panel from "../Panel.jsx";

export default function BackPanel ({zoneDimension}) {
    const [zoneWidth, zoneHeight, zoneDepth] = zoneDimension
    const backPanelThk = 1
    const leftSideThk = 1
    const rightSideThk = 1
    const topShelfThk = 1
    const bottomShelfThk = 1

    const x = 0
    const y = 0
    const z = -zoneDepth / 2 + backPanelThk / 2
    const panelWidth = zoneWidth - leftSideThk - rightSideThk
    const panelHeight = zoneHeight - topShelfThk - bottomShelfThk

    const color="#e15a8d"
    const edgesColor="#ee1414"

    return (
        <Panel position={[x,y,z]} dimension={[panelWidth, panelHeight, backPanelThk]} color={color} edgesColor={edgesColor} />
    )
}