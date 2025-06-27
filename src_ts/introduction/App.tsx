import { useState } from "react";
import { View } from "react-native";
import useAsyncEffect from "../../lib/useAsyncEffect.ts";
import initialArticles, { type Article } from "../../lib/data/articles.ts";
import ArticleDisplay from "./components/ArticleDisplay.tsx";
import ArticlesIndex from "./components/ArticlesIndex.tsx";
import Header from "./components/Header.tsx";
import LoadingPlaceholder from "./components/LoadingPlaceholder.tsx";
import fetch from "./dummy-api.ts";
import useAsyncStoredState from "./useAsyncStoredState.ts";

const App = () => {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [articlesAreReady, setArticlesAreReady] = useState(false);

  const [article, setArticle] = useState<Article | null>(articles[0]);
  const goBack = () => setArticle(null);

  return (
    <>
      <Header goBack={goBack} />
      {article === null ? (
        <ArticlesIndex articles={articles} setArticle={setArticle} />
      ) : (
        <ArticleDisplay article={article} />
      )}
    </>
  );
};

export default App;
