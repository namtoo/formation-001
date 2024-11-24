import React from 'react'
import {Edges, OrbitControls, Text} from "@react-three/drei";
import LeftSide from "./zone_props/LeftSide.jsx";
import RightSide from "./zone_props/RightSide.jsx";
import TopShelf from "./zone_props/TopShelf.jsx";
import BottomShelf from "./zone_props/BottomShelf.jsx";
import ParentArticleZone from "./ParentArticleZone.jsx";


const Zone = ({zone}) => {
    console.log('============> Zone <============')
    const [testWidth, testHeight, testDepth] = zone.geo.dimension
    const [textX, textY, textZ] = zone.geo.position
    const treeId = zone.TREEID
    const treeIdLength = treeId.length

    return (
        <group position={zone.geo.position}>
            {/*<mesh position={[0,0,treeId.length]}>*/}
            {/*    <Edges color={"#ff0000"}/>*/}
            {/*    <boxGeometry args={[testWidth, testHeight, testDepth]}/>*/}
            {/*    <meshStandardMaterial color={"#ff0000"} transparent opacity={0.1}/>*/}
            {/*</mesh>*/}

            <Text position={[0, treeIdLength - textY - 35, 0]} color={"#0048ff"} renderOrder={-20}>{testWidth}</Text>
            <Text position={[0, treeIdLength - textY, 0]} color={"#d000ff"} renderOrder={-20}>{treeId}</Text>
            <ambientLight intensity={2}/>
            <OrbitControls/>
            {/*Left */}
            <LeftSide zone={zone}/>

            {/*Right */}
            <RightSide zone={zone}/>

            {/*Top */}
            <TopShelf zone={zone}/>

            {/*Bottom */}
            <BottomShelf zone={zone}/>

            {/*Door */}
            {/*<Door zoneDimension={dimension} />*/}

            {/*BackPanel */}
            {/*<BackPanel zoneDimension={dimension} />*/}

            {/*Drawer */}
            {/*<Drawer zoneDimension={dimension} />*/}
        </group>
    )
}
export default Zone
