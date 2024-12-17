import React from 'react'
import {Edges, OrbitControls, Text} from "@react-three/drei";
import LeftSide from "./zone_props/LeftSide.jsx";
import RightSide from "./zone_props/RightSide.jsx";
import TopShelf from "./zone_props/TopShelf.jsx";
import BottomShelf from "./zone_props/BottomShelf.jsx";
import BackPanel  from "./zone_props/BackPanel.jsx";
import Division from "./zone_props/Division.jsx";
import {Utils} from "../helper/Utils.jsx";


const Zone = ({TREEID}) => {
    const utils = Utils()
    const zoneGeometry = utils.zoneGeometryMap.get(TREEID)
    const dimension = zoneGeometry.dimensions
    const position = zoneGeometry.position
    const {isDoorDefined, isLeftSideDefined, isRightSideDefined, isBackDefined, isTopShelfDefined, isBottomShelfDefined} = utils.isCpDefined(TREEID)

    return (
        <group position={position}>
            {/*<ParentArticleZone dimension={dimension} />*/}
                <mesh>
                    <Text color={"#ff0000"} fontSize={2} position={[0, 0, 0]}
                          renderOrder={-20}>{TREEID}</Text>
                    <Edges color={"#ee1414"}/>
                    <boxGeometry args={dimension}/>
                    <meshStandardMaterial color={"#ff0000"} transparent opacity={0.1}/>
                </mesh>
            <ambientLight intensity={2}/>
            <OrbitControls/>
            {
                isLeftSideDefined &&
                <LeftSide TREEID={TREEID} />
            }

            {
                isRightSideDefined &&
                <RightSide TREEID={TREEID} />
            }

            {
                isTopShelfDefined &&
                <TopShelf TREEID={TREEID} />
            }

            {
                isBottomShelfDefined &&
                <BottomShelf TREEID={TREEID} />
            }

        </group>
    )
}
export default Zone
