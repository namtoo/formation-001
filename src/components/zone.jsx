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

const Zone = ({dimensions}) => {
    const [width, height, depth] = dimensions
    const edgesColor = "#ee1414"
    return (
        <group>
            <ambientLight intensity={2}/>
            <OrbitControls/>
            {/*Left -6 / 2 + 0.2 / 2 */}
            <LeftSide position={[-width / 2 + 0.2 / 2, 0, 0]} dimiensions={[0.2, 8, 2]} color={"#5be352"} egdesColor={edgesColor} />

            {/*Right */}
            <RightSide position={[width / 2 - 0.2 / 2, 0, 0]} dimiensions={[0.2, 8, 2]} color={"#66cabe"} egdesColor={edgesColor} />

            {/*Top */}
            <TopShelf position={[0, 8 / 2 - 0.2 / 2, 0]} dimiensions={[width - 0.2 - 0.2, 0.2, 2]} color={"#473ae3"} egdesColor={edgesColor} />

            {/*Bottom */}
            <BottomShelf position={[0, -8 / 2 + 0.2 / 2, 0]} dimiensions={[width - 0.2 - 0.2, 0.2, 2]} color={"#fd5b20"} egdesColor={edgesColor} />

            {/*Door */}
            <Door position={[0, 0, -2/2 - 0.2/2]} dimiensions={[width , 8 , 0.2]} color={"#e4e133"} egdesColor={edgesColor} />

            {/*Back Panel */}
            <BackPanel position={[0, 0, 2/2 - 0.2/2]} dimiensions={[width - 0.2 - 0.2, 8 - 0.2 - 0.2, 0.2]} color={"#e4e133"} egdesColor={edgesColor} />
        </group>
    )
}
export default Zone
