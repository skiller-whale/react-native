import * as FileSystem from "expo-file-system";
import { createContext, useContext, useState } from "react";
import useAsyncEffect from "use-async-effect";
import fetch from "../dummyApi.js";
import { getArticles, insertArticle } from "../query.js";
import { useDatabase } from "./Database.jsx";

const ArticlesContext = createContext({
  articles: [],
  articlesAreReady: false,
  isOnline: false,
});

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [articlesAreReady, setArticlesAreReady] = useState(false);
  const [isOnline, setIsOnline] = useState(false);

  const { drizzleDB } = useDatabase();

  useAsyncEffect(async () => {
    try {
      // fetch remote articles data
      const response = await fetch("https://dummyapi.skillerwhale/articles");
      const { data } = await response.json();
      setArticles(data);
      setArticlesAreReady(true);
      setIsOnline(true);
      // cache articles to database
      // TODO
    } catch {
      setIsOnline(false);
      // used cached data otherwise
      // TODO
    }
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles, articlesAreReady, isOnline }}>
      {children}
    </ArticlesContext.Provider>
  );
};

export const useArticles = () => useContext(ArticlesContext);
