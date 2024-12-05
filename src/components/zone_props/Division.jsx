import React from 'react'
import {useArticleData} from "../../helper/ArticleProvider.jsx";
import {getArticleDimensions} from "../../helper/Utils.jsx";
import CalcSubZoneWidth from "../../helper/CalcSubZoneWidth.jsx";
import {Edges, Text} from "@react-three/drei";

export default function Division({TREEID})   {
    console.log('============> Division <============')
    console.log('TREEID = ',TREEID)
    const {anglZoneMap,anglPrimMap,zoneGeometryMap} = useArticleData()
    const currentZone = anglZoneMap.get(TREEID)
    const linDiv1 = currentZone.LINDIV1
    if (TREEID === '0') {
        const subZoneDimensions = getArticleDimensions(anglPrimMap)
        const position = [0, 0, 0]
        zoneGeometryMap.set(TREEID,{position: position, dimensions: subZoneDimensions})
    }
    const subZoneGeometry = zoneGeometryMap.get(TREEID)
    const [zoneWidth, zoneHeight, zoneDepth] = subZoneGeometry.dimensions
    const [positionX, positionY, positionZ] = subZoneGeometry.position

    const resultLinDiv = CalcSubZoneWidth(linDiv1, zoneWidth)
    return (
        <group>
            {
                resultLinDiv.map((subZoneWidth,index)=>{
                    const createdId = TREEID + "." + index
                    const dimensions = [subZoneWidth, zoneHeight, zoneDepth]
                    const subZonePositionX = -zoneWidth / 2 + subZoneWidth / 2 + resultLinDiv.slice(0,index).reduce((acc,current)=> acc+current,0)
                    console.log('TreeID',TREEID,'linDiv',linDiv1,'index',index,'zoneWidth',zoneWidth,'subzoneWidth',subZoneWidth,'position',subZonePositionX)
                    const subZonePositionY = 0
                    const subZonePositionZ = 0
                    zoneGeometryMap.set(createdId,{position: [subZonePositionX, subZonePositionY, subZonePositionZ], dimensions: dimensions})
                    return (
                        <group key={createdId} >
                            <group position={[subZonePositionX, subZonePositionY, subZonePositionZ]}>
                                <mesh>
                                    <Text color={"#ff0000"} fontSize={8} position={[0, 0, 0]}
                                          renderOrder={-20}>{TREEID}</Text>
                                    <Edges color={"#ee1414"}/>
                                    <boxGeometry args={[zoneWidth, zoneHeight, zoneDepth]}/>
                                    <meshStandardMaterial color={"#ff0000"} transparent opacity={0.1}/>
                                </mesh>
                            </group>
                        </group>
                    )
                })
            }
        </group>
    )
}