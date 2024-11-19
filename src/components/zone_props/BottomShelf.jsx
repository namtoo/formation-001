import React from 'react'
import {Edges} from "@react-three/drei";
export default function BottomShelf (props){

    const zoneWidth = props.zoneDimension[0]
    const zoneHeight = props.zoneDimension[1]
    const zoneDepth = props.zoneDimension[2]

    const leftSideThk = 0.2
    const rightSideThk = 0.2

    const panelWidth = zoneWidth - leftSideThk - rightSideThk

    const x = 0
    const y = - zoneHeight / 2 + 0.2 / 2
    const z = 0

    const thk = 0.2 // to be replaced by data from DB

    const color="#21ffe7"
    const edgesColor="#ee1414"

    return (
        <mesh position={[x,y,z]}>
            <Edges color={edgesColor}/>
            <boxGeometry args={[panelWidth, thk, zoneDepth]}/>
            <meshStandardMaterial color={color}/>
        </mesh>
    )
}