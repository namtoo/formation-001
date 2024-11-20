import React from 'react'
import {Edges} from "@react-three/drei";

export default function RightSide (props){
    const zoneWidth = props.zoneDimension[0]
    const zoneHeight = props.zoneDimension[1]
    const zoneDepth = props.zoneDimension[2]

    const x = zoneWidth / 2 - 1 / 2
    const y = 0
    const z = 0

    const thk = 1 // to be replaced by data from DB

    const color="#66cabe"
    const edgesColor="#ee1414"

    return (
        <mesh position={[x,y,z]}>
            <Edges color={edgesColor}/>
            <boxGeometry args={[thk, zoneHeight, zoneDepth]}/>
            <meshStandardMaterial color={color}/>
        </mesh>
    )
}