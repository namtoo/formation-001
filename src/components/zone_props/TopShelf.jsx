import React from 'react'
import {Edges} from "@react-three/drei";
import Panel from "../Panel.jsx";
import {Utils} from "../../helper/Utils.jsx";

export default function TopShelf ({TREEID}) {

    const utils = Utils()
    const zoneGeometry = utils.zoneGeometryMap.get(TREEID)
    const zoneDimension = zoneGeometry.dimensions
    const [zoneWidth, zoneHeight, zoneDepth] = zoneDimension
    const topShelfThk = utils.getMatThk(TREEID).topShelfThk

    const x = 0
    const y = zoneHeight / 2 - topShelfThk / 2
    const z = 0

    const color="#e15a8d"
    const edgesColor="#ee1414"

    return (
        <Panel position={[x,y,z]} dimension={[zoneWidth, topShelfThk, zoneDepth]} color={color} edgesColor={edgesColor} />
    )

}