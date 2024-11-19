import React from 'react'
import {Edges, OrbitControls} from "@react-three/drei";
import LeftSide from "./zone_props/LeftSide.jsx";
import RightSide from "./zone_props/RightSide.jsx";
import TopShelf from "./zone_props/TopShelf.jsx";
import BottomShelf from "./zone_props/BottomShelf.jsx";
import Door from "./zone_props/Door.jsx";
import BackPanel  from "./zone_props/BackPanel.jsx";
import Drawer from "./zone_props/Drawer.jsx";
import Division from "./zone_props/Division.jsx";
import ParentArticleZone
    from "./ParentArticleZone.jsx";

const Zone = ({dimension, position}) => {
    const [width, height, depth] = dimension
    const [x, y, z] = position
    const edgesColor = "#ee1414"
    return (
        <group position={[x, y, z]}>
            {/*<ParentArticleZone dimension={dimension} />*/}

            <ambientLight intensity={2}/>
            <OrbitControls/>
            {/*Left */}
            <LeftSide zoneDimension={dimension} />

            {/*Right */}
            <RightSide zoneDimension={dimension} />

            {/*Top */}
            <TopShelf zoneDimension={dimension} />

            {/*Bottom */}
            <BottomShelf zoneDimension={dimension} />

            {/*Door */}
            {/*<Door zoneDimension={dimension} />*/}

            {/*BackPanel */}
            <BackPanel zoneDimension={dimension} />

            {/*Drawer */}
            {/*<Drawer zoneDimension={dimension} />*/}

            {/*Division */}
            <Division zoneDimension={dimension} />
        </group>
    )
}
export default Zone
