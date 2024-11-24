import './App.css'
import {Canvas} from "@react-three/fiber";
import {Edges, OrthographicCamera} from "@react-three/drei";
import React, {useState} from "react";
import MainArticle from "./components/MainArticle.jsx";
import DataParcer from "./helper/DataParcer.jsx";
import {DataProvider} from "./helper/ArticleProvider.jsx";
import anglPrim from "./data/anglPrim.json"
import anglZone from "./data/anglZone.json"
import anglElem from "./data/anglElem.json"
import ClickableCube from "./components/Cube.jsx";


function App() {
    console.log('============> App <============')
    const [cameraType, setCameraType] = useState("perspective"); // Track the active camera type
    const data = DataParcer(anglPrim, anglZone, anglElem)
    return (
        <DataProvider data={data}>
            <Canvas>
                {/*{cameraType === "orthographic" ? (*/}
                <OrthographicCamera zoom={20} makeDefault near={-1000} far={1000} position={[0, 1, 0]}/>
                {/*) : (*/}
                {/*    <perspectiveCamera makeDefault={true} fov={100} near={-0.1} far={1000} position={[0, 0, 50]} />*/}
                {/*)}*/}
                <MainArticle/>
                <mesh position={[0, 0, 0]}>
                    <Edges color={"#002aff"}/>
                    <boxGeometry args={[50, 50, 50]}/>
                    <meshStandardMaterial color={"#006fff"} transparent opacity={0.1}/>
                </mesh>
                <ClickableCube setCameraType={setCameraType}/>
            </Canvas>
        </DataProvider>

    )
}

export default App
