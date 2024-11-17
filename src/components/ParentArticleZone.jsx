import React from 'react'
import {Edges} from "@react-three/drei";

const ParentArticleZone = () => {
    return (
        <mesh position={[0, 0, 0]}>
            <Edges color={"#ee1414"}/>
            <boxGeometry args={[6, 8, 2]}/>
            <meshStandardMaterial color={"#ff0000"} transparent opacity={0.1}/>
        </mesh>
    )
}
export default ParentArticleZone
