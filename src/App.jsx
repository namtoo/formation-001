import './App.css'
import {Canvas} from "@react-three/fiber";
import {Edges, OrbitControls} from "@react-three/drei";
import Zone from "./components/zone.jsx";
import React from "react";
import ParentArticleZone from "./components/ParentArticleZone.jsx";

function App() {
    return (
        <Canvas camera={{position: [0, 0, 5], fov: 100, near: 0.1, far: 1000}}>
            {/*article design parent box */}
            <Zone dimension={[20, 20, 10]} position={[0, 0, 0]}/>
        </Canvas>

    )
}

export default App
