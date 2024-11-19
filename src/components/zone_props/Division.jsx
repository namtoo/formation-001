import React from 'react'
import {Edges} from "@react-three/drei";
import Zone
    from "../zone.jsx";

const Division = (props) => {
    const [zoneWidth, zoneHeight, zoneDepth] = props.zoneDimension

    const linDiv = "1:2:1"
    const divType = "V"
    const divThk = 0.2

    const leftSideTHK = 0.2
    const rightSideTHK = 0.2
    const remainingWidth = zoneWidth - leftSideTHK - rightSideTHK

    const linDivTable = linDiv.split(":")
    const totalRatio = linDivTable.reduce((acc, currentValue) => acc + Number(currentValue),0 )

    return (
        <>
            {
                linDivTable.map(
                    (value, index) => {
                        const subZoneWidth = value * remainingWidth / totalRatio
                        const positionX = - remainingWidth / 2 + subZoneWidth / 2 + linDivTable.slice(0,index).reduce((acc, currentValue) => acc + Number(currentValue) * remainingWidth / totalRatio,0)

                        const test = linDivTable.slice(0,index)
                        console.log(index,'test ', test)
                        return (
                            <mesh position={[positionX,0,0]} key={index}>
                                <Edges color={props.egdesColor}/>
                                <boxGeometry args={[subZoneWidth,zoneHeight,zoneDepth]}/>
                                <meshStandardMaterial color={props.color} transparent opacity={0.2}/>
                            </mesh>
                            // <Zone key={index} dimension={props.zoneDimension} position={[0,0,0]} />
                        )
                    }
                )
            }
        </>

    )

}
export default Division
