import { useState } from "react";
import { View } from "react-native";
import useAsyncEffect from "../../lib/useAsyncEffect.ts";
import { styles } from "../../lib/styles.ts";
import Header from "./components/Header.jsx";
import Tabs from "./components/Tabs.jsx";
import { fetchArticles } from "./dummy-api.js";
import ArticleDisplay from "./screens/ArticleDisplay.jsx";
import ArticleScroller from "./screens/ArticleScroller.jsx";
import NewsArticlesIndex from "./screens/NewsArticlesIndex.jsx";
import OtherArticlesIndex from "./screens/OtherArticlesIndex.jsx";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);
  useAsyncEffect(async () => {
    const response = await fetchArticles(0, 20);
    const articles = await response.json();
    setArticles(articles);
    setArticlesLoading(false);
  }, []);

  const [moreArticlesLoading, setMoreArticlesLoading] = useState(false);
  const fetchMoreArticles = async () => {
    if (moreArticlesLoading) return;

    setMoreArticlesLoading(true);
    const response = await fetchArticles(articles.length, 20);
    const newArticles = await response.json();
    setArticles((articles) => [...articles, ...newArticles]);
    setMoreArticlesLoading(false);
  };

  const [tab, setTab] = useState("news");

  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const goBack = () => setSelectedArticleId(null);

  const updateArticle = (updatedArticle) => {
    setArticles((articles) =>
      articles.map((article) =>
        article.id === updatedArticle.id ? updatedArticle : article,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <Header goBack={goBack} goBackEnabled={selectedArticleId !== null} />
      {selectedArticleId === null ? (
        tab === "news" ? (
          <NewsArticlesIndex
            articlesLoading={articlesLoading}
            articles={articles}
            setSelectedArticleId={setSelectedArticleId}
            moreArticlesLoading={moreArticlesLoading}
            fetchMoreArticles={fetchMoreArticles}
          />
        ) : (
          <OtherArticlesIndex
            articlesLoading={articlesLoading}
            articles={articles}
            setSelectedArticleId={setSelectedArticleId}
          />
        )
      ) : (
        <ArticleDisplay
          article={articles.find((article) => article.id === selectedArticleId)}
          updateArticle={updateArticle}
        />
        // <ArticleScroller
        //   selectedArticleId={selectedArticleId}
        //   articles={articles}
        //   updateArticle={updateArticle}
        // />
      )}
      <Tabs tab={tab} setTab={setTab} />
    </View>
  );
};

export default App;
