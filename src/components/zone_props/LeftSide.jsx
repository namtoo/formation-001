import React from 'react'
import {Edges} from "@react-three/drei";

export default function LeftSide (props){

    const zoneWidth = props.zoneDimension[0]
    const zoneHeight = props.zoneDimension[1]
    const zoneDepth = props.zoneDimension[2]

    const x = - zoneWidth / 2 + 0.2 / 2
    const y = 0
    const z = 0

    const thk = 0.2 // to be replaced by data from DB

    const color="#5be352"
    const edgesColor="#ee1414"


    console.log('zoneWidth', zoneWidth, 'zoneHeight', zoneHeight, 'zoneDepth', zoneDepth)

    return (
        <mesh position={[x,y,z]}>
            <Edges color={edgesColor}/>
            <boxGeometry args={[thk, zoneHeight, zoneDepth]}/>
            <meshStandardMaterial color={color}/>
        </mesh>
    )
}