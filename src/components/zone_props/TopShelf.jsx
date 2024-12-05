import React from 'react'
import {Edges} from "@react-three/drei";
import Panel from "../Panel.jsx";

export default function TopShelf ({zoneDimension}) {

    const [zoneWidth, zoneHeight, zoneDepth] = zoneDimension
    const topShelfThk = 1
    const leftSideThk = 1
    const rightSideThk = 1

    const panelWidth = zoneWidth - leftSideThk - rightSideThk
    const x = 0
    const y = zoneHeight / 2 - topShelfThk / 2
    const z = 0

    const color="#1c76b6"
    const edgesColor="#ee1414"

    return (
        <Panel position={[x,y,z]} dimension={[panelWidth, topShelfThk, zoneDepth]} color={color} edgesColor={edgesColor} />
    )
}
