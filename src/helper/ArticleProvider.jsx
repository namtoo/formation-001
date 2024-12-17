import React, { createContext, useEffect, useState } from "react";
const ArticleContext = createContext();

export const DataProvider  = ({ data,children }) => {
    const [articleData,setArticleData] = useState({anglPrimMap:new Map(),anglZoneMap:new Map (),anglElemMap:new Map(),zoneGeometryMap:new Map()});

    useEffect(() => {
        setArticleData(data);
    }, [data]);

    return (
        <ArticleContext.Provider value={articleData}>
            {children}
        </ArticleContext.Provider>
    );
};

export const useArticleData = () => React.useContext(ArticleContext);