import React from 'react'
import {getDividerInfo} from "../../helper/Helper.jsx";
import MyBox from "../MyBox.jsx";

export default function Shelf({zone}) {
    console.log("===============> Shelf <===============")

    const info = getDividerInfo(zone)

    return (
        <>
            {
                (info.type === 'F'  || info.type === 'A') &&
                <MyBox position={info.position} dimension={[info.length, info.thk, info.width]} color={'#c40df6'}/>
            }
        </>

    )
}
