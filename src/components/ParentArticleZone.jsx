import React from 'react'
import {Edges} from "@react-three/drei";

const ParentArticleZone = (props) => {

    return (
        <mesh position={props.dimensions}>
            <Edges color={"#ee1414"}/>
            <boxGeometry args={props.dimensions}/>
            <meshStandardMaterial color={"#ff0000"} transparent opacity={0.1}/>
        </mesh>
    )
}
export default ParentArticleZone
