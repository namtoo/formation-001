import React from 'react'
import {Edges} from "@react-three/drei";
import Panel from "../Panel.jsx";

export default function LeftSide ({zoneDimension}){

    const [zoneWidth, zoneHeight, zoneDepth] = zoneDimension
    const leftSideThk = 1

    const x = - zoneWidth / 2 + leftSideThk / 2
    const y = 0
    const z = 0

    const color="#5be352"
    const edgesColor="#ee1414"

    return (
        <Panel position={[x,y,z]} dimension={[leftSideThk, zoneHeight, zoneDepth]} color={color} edgesColor={edgesColor} />
    )
}