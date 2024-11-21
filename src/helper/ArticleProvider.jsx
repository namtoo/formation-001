import React, { createContext, useEffect, useState } from "react";
const ArticleContext = createContext();

export const DataProvider  = ({ data,children }) => {
    const [articleData,setArticleData] = useState({anglPrim:[],anglZone:[],anglElem:[]})

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