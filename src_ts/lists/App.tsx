import { useState } from "react";
import { View } from "react-native";
import { useAsyncEffect } from "use-async-effect";
import { type Article } from "../../lib/data/articles.ts";
import { styles } from "../../lib/styles.ts";
import Header from "./components/Header.tsx";
import Tabs, { type Tab } from "./components/Tabs.tsx";
import { fetchArticles } from "./dummy-api.ts";
import ArticleDisplay from "./screens/ArticleDisplay.tsx";
import ArticleScroller from "./screens/ArticleScroller.tsx";
import NewsArticlesIndex from "./screens/NewsArticlesIndex.tsx";
import OtherArticlesIndex from "./screens/OtherArticlesIndex.tsx";

const App = () => {
  const [articles, setArticles] = useState<Article[]>([]);
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

  const [tab, setTab] = useState<Tab>("news");

  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(
    null,
  );
  const goBack = () => setSelectedArticleId(null);

  const updateArticle = (updatedArticle: Article) => {
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
          article={
            articles.find((article) => article.id === selectedArticleId)!
          }
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
