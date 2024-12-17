import React from 'react'
import {useArticleData} from "../../helper/ArticleProvider.jsx";
import {getArticleDimensions, Utils} from "../../helper/Utils.jsx";
import CalcSubZoneWidth from "../../helper/CalcSubZoneWidth.jsx";
import {Edges, Text} from "@react-three/drei";
import log from "eslint-plugin-react/lib/util/log.js";
import Zone from "../zone.jsx";

export default function Division({TREEID}) {
    console.log('============> Division <============')
    const utils = Utils()
    const {anglZoneMap, anglPrimMap, anglElemMap, zoneGeometryMap} = useArticleData()
    const currentZone = anglZoneMap.get(TREEID)
    const linDiv1 = currentZone.LINDIV1
    const linDivDirection = currentZone.DIVDIR
    const dividerThk = currentZone.DIVIDER !=='' ? 2 : 0
    const matThk = utils.getMatThk(TREEID)
    const {leftSideThk, rightSideThk, backThk, topShelfThk, bottomShelfThk} = matThk


    console.log(matThk)

    if (TREEID === '0') {
        const subZoneDimensions = getArticleDimensions(anglPrimMap)
        const position = [0, 0, 0]
        zoneGeometryMap.set(TREEID, {position: position, dimensions: subZoneDimensions})
    }
    const subZoneGeometry = zoneGeometryMap.get(TREEID)
    const [zoneWidth, zoneHeight, zoneDepth] = subZoneGeometry.dimensions
    const remainingGeometry = utils.getRemainingDimensions(TREEID, subZoneGeometry.dimensions, subZoneGeometry.position)
    const [remainingWidth,remainingHeight,remainingDepth] = remainingGeometry.dimension
    const [remainingX, remainingY, remainingZ] = remainingGeometry.position
    const zoneLength = linDivDirection === 'H' ? remainingWidth : remainingHeight
    console.log('length',zoneLength)
    const [positionX, positionY, positionZ] = subZoneGeometry.position


    const resultLinDiv = CalcSubZoneWidth(linDiv1, zoneLength, dividerThk)
    return (
        <group>
            {
                TREEID === '0' &&
                <Zone TREEID={TREEID} key={TREEID}/>
            }
            {
            resultLinDiv.map((subZoneLength, index) => {
                const subZoneWidth = linDivDirection === 'H' ? subZoneLength : remainingWidth
                const subZoneHeight = linDivDirection === 'V' ? subZoneLength : remainingHeight
                const subZoneDepth = remainingDepth
                const thkStep = resultLinDiv.slice(0,index).reduce((acc,_)=>  acc+ dividerThk,0)
                const subZoneRelativePosition = -zoneLength / 2 + subZoneLength / 2 + resultLinDiv.slice(0, index).reduce((acc, current) => acc + current, 0) + thkStep

                const createdId = TREEID + "." + index
                const subZonePositionX = remainingX + (linDivDirection === 'H' ?  subZoneRelativePosition : 0 )
                const subZonePositionY = remainingY + (linDivDirection === 'V' ?  subZoneRelativePosition : 0 )
                const subZonePositionZ = remainingZ
                const dimensions = [subZoneWidth, subZoneHeight, subZoneDepth]
                const position = [subZonePositionX, subZonePositionY, subZonePositionZ]
                zoneGeometryMap.set(createdId, {position: position, dimensions: dimensions})
                return (
                    <Zone TREEID={createdId} key={createdId}/>

                )
            })
        }
        </group>
    )
}