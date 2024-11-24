import React from 'react'
import {Edges} from "@react-three/drei";
import {edgesColor} from "../../helper/Constants.jsx";
import {getRightSideThk} from "../../helper/Helper.jsx";

export default function RightSide({zone}) {
    const zoneID = zone.TREEID
    const [zoneWidth, zoneHeight, zoneDepth] = zone.geo.dimension

    const rightSideHeight = zoneHeight
    const rightSideDepth = zoneDepth
    const rightSideThk = getRightSideThk(zoneID)

    const x = zoneWidth / 2 - rightSideThk / 2
    const y = 0
    const z = 0

    return (
        <mesh position={[x,y,z]}>
            <Edges color={edgesColor}/>
            <boxGeometry args={[rightSideThk, rightSideHeight, rightSideDepth]}/>
            <meshStandardMaterial color={"#5be352"} transparent opacity={.4}/>
        </mesh>
    )
}