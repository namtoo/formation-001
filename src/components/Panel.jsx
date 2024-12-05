import React from 'react'
import {Edges} from "@react-three/drei";

export default function Panel(props) {
    return (
        <mesh position={props.position} >
            <Edges color={props.edgesColor}/>
            <boxGeometry args={props.dimension}/>
            <meshStandardMaterial color={props.color} transparent opacity={props.opacity}/>
        </mesh>
)
}
