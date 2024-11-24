import React from 'react'
import {Edges} from "@react-three/drei";
import {edgesColor} from "../../helper/Constants.jsx";
import {getLeftSideThk} from "../../helper/Helper.jsx";

export default function LeftSide({zone}) {
    const zoneID = zone.TREEID
    const [zoneWidth, zoneHeight, zoneDepth] = zone.geo.dimension

    const leftSideHeight = zoneHeight
    const leftSideDepth = zoneDepth
    const leftSideThk = getLeftSideThk(zoneID)

    const x = - zoneWidth / 2 + leftSideThk / 2
    const y = 0
    const z = 0

    return (
        <mesh position={[x,y,z]}>
            <Edges color={edgesColor}/>
            <boxGeometry args={[leftSideThk, leftSideHeight, leftSideDepth]}/>
            <meshStandardMaterial color={"#5be352"} transparent opacity={.4}/>
        </mesh>
    )
}