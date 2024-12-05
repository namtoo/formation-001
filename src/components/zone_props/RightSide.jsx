import React from 'react'
import {Edges} from "@react-three/drei";
import Panel from "../Panel.jsx";

export default function RightSide ({zoneDimension}){
    const [zoneWidth, zoneHeight, zoneDepth] = zoneDimension
    const rightSideThk = 1

    const x = zoneWidth / 2 - rightSideThk / 2
    const y = 0
    const z = 0

    const color="#66cabe"
    const edgesColor="#ee1414"

    return (
        <Panel position={[x,y,z]} dimension={[rightSideThk, zoneHeight, zoneDepth]} color={color} edgesColor={edgesColor} />
    )
}