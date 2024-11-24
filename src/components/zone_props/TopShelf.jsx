import React from 'react'
import {Edges, Text} from "@react-three/drei";
import {getLeftSideThk, getParentID, getRightSideThk, getTopShelfThk} from "../../helper/Helper.jsx";

export default function TopShelf({zone}) {
    const zoneID = zone.TREEID
    const [zoneWidth, zoneHeight, zoneDepth] = zone.geo.dimension

    const leftSideThk = getLeftSideThk(zoneID)
    const rightSideThk = getRightSideThk(zoneID)

    const topShelfWidth = zoneWidth - leftSideThk - rightSideThk
    const topShelfDepth = zoneDepth
    const topShelfThk = getTopShelfThk(zoneID)

    const x = 0
    const y = zoneHeight / 2 - topShelfThk / 2
    const z = 0

    const color = "#831cb6"
    const edgesColor = "#ee1414"

    return (
        <>
            <mesh position={[x, y, z]}>
                <Edges color={edgesColor}/>
                <boxGeometry args={[topShelfWidth, topShelfThk, topShelfDepth]}/>
                <meshStandardMaterial color={color} transparent opacity={.4}/>
            </mesh>
        </>

    )
}
