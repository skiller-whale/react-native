import { useState } from "react";
import { StyleSheet, View } from "react-native";
import fetch from "../../../lib/dummyApi.ts";
import { spacing } from "../../../lib/styles.ts";
import { StyledText as Text } from "../../../lib/typography.tsx";
import Button from "../components/Button.jsx";
import LoadingPlaceholder from "../components/LoadingPlaceholder.jsx";
import Content from "../formPages/Content.jsx";
import CoverImage from "../formPages/CoverImage.jsx";
import MetaData from "../formPages/MetaData.jsx";
import Submit from "../formPages/Submit.jsx";
import usePages from "../hooks/usePages.js";

const pages = ["metaData", "content", "coverImage", "submit"];

const NewArticleForm = ({ refreshArticles }) => {
  const [page, nextPage, previousPage] = usePages(pages);

  const [status, setStatus] = useState("inProgress");

  const [article, setArticle] = useState({
    id: "",
    title: "",
    author: "",
    tag: "news",
    date: new Date(),
    whales: [],
    content: [],
    imageSrc: "",
  });

  const submit = async () => {
    setStatus("submitting");
    try {
      // upload the image
      const imageResponse = await fetch(
        "https://dummyapi.skillerwhale/images",
        {
          method: "POST",
          body: "", // ???
        },
      );
      const imageResponseBody = await imageResponse.json();
      if (imageResponseBody.error) {
        console.log(imageResponseBody.error);
        setStatus("error");
        return;
      }

      // attach the URI of the uploaded image to a copy of the article
      const newArticle = { ...article, imageSrc: imageResponseBody.data.uri };

      // upload the copy of the article
      const newArticleResponse = await fetch(
        "https://dummyapi.skillerwhale/articles",
        {
          method: "POST",
          body: "", // ???
        },
      );
      const newArticleResponseBody = await newArticleResponse.json();
      if (newArticleResponseBody.error) {
        console.log(newArticleResponseBody.error);
        setStatus("error");
        return;
      }

      // mark the form as submitted, and refresh the list of articles
      setStatus("submitted");
      refreshArticles();
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };

  return (
    <View style={newArticleFormStyles.container}>
      {status === "submitting" ? (
        <LoadingPlaceholder message="Submitting article..." />
      ) : status === "submitted" ? (
        <Text>Article submitted!</Text>
      ) : (
        <>
          <View style={newArticleFormStyles.title}>
            <Text size="xl">Submit Your Article</Text>
            <View style={newArticleFormStyles.buttons}>
              <Button
                onPress={previousPage}
                disabled={page === "metaData"}
                icon="arrow-back"
              />
              <Button
                onPress={page === "submit" ? submit : nextPage}
                icon={page === "submit" ? "send" : "arrow-forward"}
              />
            </View>
          </View>
          <View>
            {page === "metaData" ? (
              <MetaData article={article} setArticle={setArticle} />
            ) : page === "content" ? (
              <Content article={article} setArticle={setArticle} />
            ) : page === "coverImage" ? (
              <CoverImage article={article} setArticle={setArticle} />
            ) : (
              <Submit article={article} />
            )}
          </View>
        </>
      )}
    </View>
  );
};

const newArticleFormStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
    gap: spacing.md,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  buttons: {
    flexDirection: "row",
    gap: spacing.sm,
  },
});

export default NewArticleForm;
