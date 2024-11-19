import React from 'react'
import {Edges} from "@react-three/drei";

export default function BackPanel (props){
    const zoneWidth = props.zoneDimension[0]
    const zoneHeight = props.zoneDimension[1]
    const zoneDepth = props.zoneDimension[2]

    const x = 0
    const y = 0
    const z = zoneDepth / 2 - 0.2 / 2

    const leftSideThk = 0.2
    const rightSideThk = 0.2
    const topShelfThk = 0.2
    const bottomShelfThk = 0.2

    const panelWidth = zoneWidth - leftSideThk - rightSideThk
    const panelHeight = zoneHeight - topShelfThk - bottomShelfThk

    const thk = 0.2 // to be replaced by data from DB

    const color="#e15a8d"
    const edgesColor="#ee1414"

    return (
        <mesh position={[x,y,z]}>
            <Edges color={edgesColor}/>
            <boxGeometry args={[panelWidth, panelHeight, thk]}/>
            <meshStandardMaterial color={color}/>
        </mesh>
    )
}