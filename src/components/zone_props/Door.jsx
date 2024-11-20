import React from 'react'
import {Edges} from "@react-three/drei";

export default function Door (props) {

    const zoneWidth = props.zoneDimension[0]
    const zoneHeight = props.zoneDimension[1]
    const zoneDepth = props.zoneDimension[2]

    const x = 0
    const y = 0
    const z = - zoneDepth / 2 - 1 / 2

    const thk = 1 // to be replaced by data from DB

    const color="#ffc900"
    const edgesColor="#ee1414"

    return (
        <mesh position={[x,y,z]}>
            <Edges color={edgesColor}/>
            <boxGeometry args={[zoneWidth, zoneHeight, thk]}/>
            <meshStandardMaterial color={color}/>
        </mesh>
    )
}