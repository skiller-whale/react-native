import { useState } from "react";
import { View } from "react-native";
import { useAsyncEffect } from "use-async-effect";
import initialArticles from "../../lib/data/articles.ts";
import fetch from "./dummy-api.js";
import ArticleDisplay from "./components/ArticleDisplay.jsx";
import ArticlesIndex from "./components/ArticlesIndex.jsx";
import Header from "./components/Header.jsx";
import LoadingPlaceholder from "./components/LoadingPlaceholder.jsx";
import useAsyncStoredState from "./useAsyncStoredState.js";

const App = () => {
  const [articles, setArticles] = useState(initialArticles);
  const [articlesAreReady, setArticlesAreReady] = useState(false);

  const [article, setArticle] = useState(articles[0]);
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
