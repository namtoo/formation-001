import Zone from "./zone.jsx"
import {useArticleData} from "../helper/ArticleProvider.jsx"
import {Calculator} from "../helper/Calculator.jsx";
import Division from "./zone_props/Division.jsx";


export default function MainArticle()  {
    console.log("============> MainArticle <============")

    const {anglZoneMap} = useArticleData()
    const position = [0, 0, 0]

    return (
        <>
            {[...anglZoneMap.keys()].map((key, index) => {
                const zoneInfo = anglZoneMap.get(key);
                const { TREEID } = zoneInfo;

                return (
                    <Division key={index} TREEID={TREEID} zoneInfo={zoneInfo} position={position} />
                );
            })}
        </>
    );
}