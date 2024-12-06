import React from 'react'
import {useArticleData} from "../../helper/ArticleProvider.jsx";
import {getArticleDimensions} from "../../helper/Utils.jsx";
import CalcSubZoneWidth from "../../helper/CalcSubZoneWidth.jsx";
import {Edges, Text} from "@react-three/drei";
import log from "eslint-plugin-react/lib/util/log.js";

export default function Division({TREEID}) {
    console.log('============> Division <============')
    const {anglZoneMap, anglPrimMap, zoneGeometryMap} = useArticleData()
    const currentZone = anglZoneMap.get(TREEID)
    const linDiv1 = currentZone.LINDIV1
    const linDivDirection = currentZone.DIVDIR
    const dividerThk = currentZone.DIVIDER !=='' ? 2 : 0
    if (TREEID === '0') {
        const subZoneDimensions = getArticleDimensions(anglPrimMap)
        const position = [0, 0, 0]
        zoneGeometryMap.set(TREEID, {position: position, dimensions: subZoneDimensions})
    }
    const subZoneGeometry = zoneGeometryMap.get(TREEID)
    const [zoneWidth, zoneHeight, zoneDepth] = subZoneGeometry.dimensions
    const zoneLength = linDivDirection === 'H' ? zoneWidth : zoneHeight
    const [positionX, positionY, positionZ] = subZoneGeometry.position

    const resultLinDiv = CalcSubZoneWidth(linDiv1, zoneLength, dividerThk)
    return (
        <group>
            {
                TREEID === '0' &&
                <mesh>
                    <Text color={"#ff0000"} fontSize={12} position={[0, 0, 0]}
                          renderOrder={-20}>{TREEID}</Text>
                    <Edges color={"#ee1414"}/>
                    <boxGeometry args={[zoneWidth, zoneHeight, zoneDepth]}/>
                    <meshStandardMaterial color={"#ff0000"} transparent opacity={0.1}/>
                </mesh>

            }
            {
            resultLinDiv.map((subZoneLength, index) => {
                const subZoneWidth = linDivDirection === 'H' ? subZoneLength : zoneWidth
                const subZoneHeight = linDivDirection === 'V' ? subZoneLength : zoneHeight
                const subZoneDepth = zoneDepth
                const subZoneRelativePosition = subZoneLength / 2 +resultLinDiv.slice(0, index).reduce((acc, current) => acc + current, 0)
                const thkStep = resultLinDiv.slice(0,index).reduce((acc,_)=>  acc+ dividerThk,0)

                const createdId = TREEID + "." + index
                const subZonePositionX = linDivDirection === 'H'
                    ? positionX - zoneWidth / 2  + subZoneRelativePosition + thkStep
                    : positionX
                const subZonePositionY = linDivDirection === 'V'
                    ? positionY - zoneHeight / 2 + subZoneRelativePosition + thkStep
                    : positionY
                const subZonePositionZ = positionZ
                const dimensions = [subZoneWidth, subZoneHeight, subZoneDepth]
                const position = [subZonePositionX, subZonePositionY, subZonePositionZ]
                zoneGeometryMap.set(createdId, {position: position, dimensions: dimensions})
                return (
                    <group key={createdId} position={[subZonePositionX, subZonePositionY, subZonePositionZ]}>
                        <mesh>
                            <Text color={"#ff0000"} fontSize={2} position={[0, 0, 0]}
                                  renderOrder={-20}>{createdId}</Text>
                            <Edges color={"#ee1414"}/>
                            <boxGeometry args={[subZoneWidth, subZoneHeight, subZoneDepth]}/>
                            <meshStandardMaterial color={"#ff0000"} transparent opacity={0.1}/>
                        </mesh>
                    </group>

                )
            })
        }
        </group>
    )
}