import React from 'react'
import {Edges} from "@react-three/drei";
import Zone from "../zone.jsx";
import {useArticleData} from "../../helper/ArticleProvider.jsx";

const Division = (props) => {
    const {anglPrim,anglZone,anglElem} = useArticleData()
    console.log('anglPrim', anglPrim, 'anglZone', anglZone, 'anglElem', anglElem)
    const [zoneWidth, zoneHeight, zoneDepth] = props.zoneDimension

    const linDiv = "1:2:1:2:1";
    const divType = "V";
    const divThk = 1;

    const leftSideTHK = 1;
    const rightSideTHK = 1;
    const topShelfTHK = 1;
    const bottomShelfTHK = 1;
    const dividerTHK = 1
    const remainingWidth = zoneWidth - leftSideTHK - rightSideTHK
    const remainingHeight = zoneHeight - topShelfTHK - bottomShelfTHK

    const linDivTable = linDiv.split(":")
    const totalRatio = linDivTable.reduce((acc, currentValue) => acc + Number(currentValue), 0)
    const substractedTHK = (linDivTable.length - 1) * dividerTHK

    return (
        <>
            {
                linDivTable.map(
                    (value, index) => {
                        const subZoneWidth = value * (remainingWidth - substractedTHK) / totalRatio
                        const positionX = -remainingWidth / 2 + subZoneWidth / 2
                            + linDivTable.slice(0, index).reduce((acc, currentValue) => acc + Number(currentValue) * (remainingWidth - substractedTHK) / totalRatio, 0)
                            + linDivTable.slice(0, index).reduce((acc, currentValue) => acc + dividerTHK, 0)
                        const dividerPosX = positionX + subZoneWidth / 2 + dividerTHK / 2
                        // console.log('index', index, 'positionX', positionX, 'linDivTable.length - 1', linDivTable.length - 1)
                        // console.log(linDivTable.length - 1 !== index)
                        return (
                            <group key={index}>
                                <mesh position={[positionX, 0, 0]} key={index}>
                                    <Edges color={props.egdesColor}/>
                                    <boxGeometry args={[subZoneWidth, remainingHeight, zoneDepth]}/>
                                    <meshStandardMaterial color={props.color} transparent opacity={0.3}/>
                                </mesh>
                                {
                                    linDivTable.length - 1 !== index && (
                                        <mesh position={[dividerPosX, 0, 0]} key={index + 'divider'}>
                                            <Edges color={props.egdesColor}/>
                                            <boxGeometry args={[dividerTHK, remainingHeight, zoneDepth]}/>
                                            <meshStandardMaterial color={'#ee1414'} transparent opacity={0.3}/>
                                        </mesh>
                                    )
                                }
                            </group>

                            // <Zone key={index} dimension={props.zoneDimension} position={[0,0,0]} />
                        )
                    }
                )
            }
        </>

    )

}
export default Division
