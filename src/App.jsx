import './App.css'
import {Canvas} from "@react-three/fiber";
import {Edges, OrbitControls} from "@react-three/drei";
import Zone from "./components/zone.jsx";
import React from "react";
import ParentArticleZone from "./components/ParentArticleZone.jsx";
import MainArticle from "./components/MainArticle.jsx";
import DataParcer from "./helper/DataParcer.jsx";
import {DataProvider} from "./helper/ArticleProvider.jsx";
import anglPrim from "./data/anglPrim.json"
import anglZone from "./data/anglZone.json"
import anglElem from "./data/anglElem.json"


function App() {
    const data = DataParcer(anglPrim, anglZone, anglElem)
    return (
        <DataProvider data={data}>
            <Canvas camera={{position: [0, 0, 5], fov: 100, near: 0.1, far: 1000}}>
                {/*article design parent box */}
                <MainArticle dimension={[20, 20, 10]} position={[0, 0, 0]}/>
            </Canvas>
        </DataProvider>

    )
}

export default App
