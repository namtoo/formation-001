import React from 'react'
import {Edges} from "@react-three/drei";
import Panel from "../Panel.jsx";
export default function BottomShelf ({zoneDimension}){

    const [zoneWidth, zoneHeight, zoneDepth] = zoneDimension
    const leftSideThk = 1
    const rightSideThk = 1
    const bottomShelfThk = 1

    const panelWidth = zoneWidth - leftSideThk - rightSideThk
    const x = 0
    const y = - zoneHeight / 2 + bottomShelfThk / 2
    const z = 0

    const color="#21ffe7"
    const edgesColor="#ee1414"

    return (
        <Panel position={[x,y,z]} dimension={[panelWidth, bottomShelfThk, zoneDepth]} color={color} edgesColor={edgesColor} />
    )
}