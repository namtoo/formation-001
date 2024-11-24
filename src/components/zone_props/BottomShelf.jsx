import React from 'react'
import {Edges} from "@react-three/drei";
import {getBottomShelfThk, getLeftSideThk, getParentID, getRightSideThk} from "../../helper/Helper.jsx";

export default function BottomShelf({zone}) {
    const zoneID = zone.TREEID
    const [zoneWidth, zoneHeight, zoneDepth] = zone.geo.dimension

    const leftSideThk = getLeftSideThk(zoneID)
    const rightSideThk = getRightSideThk(zoneID)

    const bottomShelfWith = zoneWidth - leftSideThk - rightSideThk
    const bottomShelfDepth = zoneDepth
    const bottomShelfThk = getBottomShelfThk(zoneID)

    const x = 0
    const y = - zoneHeight / 2 + bottomShelfThk / 2
    const z = 0

    const color = "#215507"
    const edgesColor = "#ee1414"

    return (
        <mesh position={[x, y, z]}>
            <Edges color={edgesColor}/>
            <boxGeometry args={[bottomShelfWith, bottomShelfThk, bottomShelfDepth]}/>
            <meshStandardMaterial color={color} transparent opacity={.4}/>
        </mesh>
    )
}