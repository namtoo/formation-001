import React from 'react'
import {Edges} from "@react-three/drei";
import {edgesColor} from "../helper/Constants.jsx";

export default function MyBox(props) {
    return (
        <mesh position={props.position}>
            <Edges color={edgesColor}/>
            <boxGeometry args={props.dimension}/>
            <meshStandardMaterial color={props.color} transparent opacity={props.opacity} />
        </mesh>
    )
}
