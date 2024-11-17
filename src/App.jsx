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
            <ParentArticleZone />
            <Zone dimensions={[8, 8, 2]}/>
        </Canvas>

    )
}

export default App
