import React from 'react'
import {Edges} from "@react-three/drei";

const Drawer = (props) => {
    return (
        <mesh position={props.position}>
            <Edges color={props.egdesColor}/>
            <boxGeometry args={props.dimiensions}/>
            <meshStandardMaterial color={props.color}/>
        </mesh>
    )
}
export default Drawer
