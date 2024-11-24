import React from 'react'
import {getDividerInfo, getDividerThk, getDividerType, getParentID} from "../../helper/Helper.jsx";
import {Edges} from "@react-three/drei";
import {edgesColor} from "../../helper/Constants.jsx";
import MyBox from "../MyBox.jsx";

export default function Partition({zone}) {
    console.log("===============> Partition <===============")

    const info = getDividerInfo(zone)

    return (
        <>
            {
                info.type === 'P' &&
                <MyBox position={info.position} dimension={[info.thk, info.length, info.width]} color={'#23e'} opacity={0.4}/>
            }
        </>
    )
}
