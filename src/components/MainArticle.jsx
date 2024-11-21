import Zone from "./zone.jsx"
import {useArticleData} from "../helper/ArticleProvider.jsx"


export default function MainArticle()  {
    console.log("============> MainArticle <============")

    const {anglPrim} = useArticleData()
    const articleWidth = Number(anglPrim[0].SIZEX/10)
    const articleHeight = Number(anglPrim[0].SIZEY/10)
    const articleDepth = Number(anglPrim[0].SIZEZ/10)

    console.log(articleWidth, articleHeight, articleDepth)
    return (
            <Zone dimension={[articleWidth, articleHeight, articleDepth ]} position={[0, 0, 0]}/>
    )
}