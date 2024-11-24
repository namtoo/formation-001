import React from 'react'
import {Calculator} from "../../helper/Calculator.jsx";
import Zone from "../zone.jsx";
import Partition from "./Partition.jsx";
import Shelf from "./Shelf.jsx";
import {Edges} from "@react-three/drei";


const Division = ({zoneInfo}) => {
    console.log('=============> Division <============')
    const TREEID = zoneInfo.TREEID
    const zone = Calculator(TREEID)

    const [testWidth, testHeight, testDepth] = zone.geo.dimension

    const zoneIndex = TREEID.slice(-1)[0]

    return (
        <group>
            <Zone zone={zone}/>
            {/*<mesh position={[0, 0, TREEID.length]}>*/}
            {/*    <Edges color={"#ff0000"}/>*/}
            {/*    <boxGeometry args={[testWidth, testHeight, testDepth]}/>*/}
            {/*    <meshStandardMaterial color={"#ff0000"} transparent opacity={0.1}/>*/}
            {/*</mesh>*/}
            {/*{*/}
            {/*    zoneIndex !== "0" &&*/}
            {/*    <Partition zone={zone} />*/}
            {/*}*/}
            {/*{*/}
            {/*    zoneIndex !== "0" &&*/}
            {/*    <Shelf zone={zone} />*/}
            {/*}*/}
        </group>
    )
}
export default Division
