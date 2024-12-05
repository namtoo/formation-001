
import {useArticleData} from "../helper/ArticleProvider.jsx"
import {scaleFactor} from "../helper/Constants.jsx";
import Division from "./zone_props/Division.jsx";


export default function MainArticle() {
    console.log("============> MainArticle <============")
    const {anglPrimMap, anglZoneMap} = useArticleData()
    const anglPrim = anglPrimMap.get("TEST_OAL_CAB_CONV_001")
    const articleWidth = anglPrim.SIZEX * scaleFactor
    const articleHeight = anglPrim.SIZEY * scaleFactor
    const articleDepth = anglPrim.SIZEZ * scaleFactor

    const filteredMap = new Map(
        Array.from(anglZoneMap).filter(([key, value]) => value.LINDIV1 !== '' || value.TREEID === '0')
    );

    return (
        <>
            {
                [...filteredMap.keys()].map((value, index) => {

                    return (
                        <Division key={value} TREEID={value}/>
                    )
                })
            }
        </>
    )
}