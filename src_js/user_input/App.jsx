import { useState } from "react";
import { ScrollView, View } from "react-native";
import useAsyncEffect from "use-async-effect";
import { styles } from "../../lib/styles.ts";
import Header from "./components/Header.jsx";
import LoadingPlaceholder from "./components/LoadingPlaceholder.jsx";
import fetch from "./dummyApi.js";
import ArticleDisplay from "./screens/ArticleDisplay.jsx";
import ArticlesIndex from "./screens/ArticlesIndex.jsx";
import NewArticleForm from "./screens/NewArticleForm.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const [currentArticleId, setCurrentArticleId] = useState(null);
  const currentArticle = articles.find(
    (article) => article.id === currentArticleId,
  );

  const goBack = () => {
    setCurrentArticleId(null);
  };

  const newArticle = () => {
    setCurrentArticleId("new");
  };

  const refreshArticles = async () => {
    setLoading(true);
    const response = await fetch("https://dummyapi.skillerwhale/articles");
    const { data } = await response.json();
    const articles = data.map((article) => ({
      ...article,
      date: new Date(article.date),
    }));
    setArticles(articles);
    setLoading(false);
  };

  useAsyncEffect(refreshArticles, []);

  return (
    <View style={styles.container}>
      <Header goBack={goBack} goBackEnabled={currentArticleId !== null} />
      <ScrollView style={styles.container}>
        {loading ? (
          <LoadingPlaceholder message="Loading articles..." />
        ) : currentArticleId === null ? (
          <ArticlesIndex
            articles={articles}
            setCurrentArticleId={setCurrentArticleId}
            newArticle={newArticle}
          />
        ) : currentArticleId === "new" ? (
          <NewArticleForm refreshArticles={refreshArticles} />
        ) : (
          <ArticleDisplay
            isPreview={false}
            article={currentArticle}
            refreshArticles={refreshArticles}
            goBack={goBack}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default App;
