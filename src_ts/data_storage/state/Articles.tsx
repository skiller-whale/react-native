import * as FileSystem from "expo-file-system";
import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";
import useAsyncEffect from "use-async-effect";
import type { Article } from "../../../lib/data/articles.ts";
import fetch from "../dummyApi";
import { getArticles, insertArticle } from "../query.ts";
import { useDatabase } from "./Database.tsx";

const ArticlesContext = createContext({
  articles: [] as Article[],
  articlesAreReady: false,
  isOnline: false,
});

export const ArticlesProvider = ({ children }: PropsWithChildren) => {
  const [articles, setArticles] = useState<Article[]>([]);
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
