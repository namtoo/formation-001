import React from 'react'
import {Edges} from "@react-three/drei";
import Panel from "../Panel.jsx";

export default function Door ({zoneDimension}){

    const [zoneWidth, zoneHeight, zoneDepth] = zoneDimension
    const doorThk = 1

    const x = 0
    const y = 0
    const z = zoneDepth / 2 + doorThk / 2
    const color="#ffc900"
    const edgesColor="#ee1414"

    return (
        <Panel position={[x,y,z]} dimension={[zoneWidth, zoneHeight, doorThk]} color={color} edgesColor={edgesColor} />
    )
}