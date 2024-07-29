import uuid from "react-native-uuid";
import dummyArticles from "../../lib/data/articles.ts";

let lastReadImageSrc = "";

export default async (
  requestInfo: RequestInfo,
  requestInit?: RequestInit,
): Promise<Response> => {
  const path = typeof requestInfo === "string" ? requestInfo : requestInfo.url;
  if (path.startsWith("file://")) {
    lastReadImageSrc = path;
  }
  return path.startsWith("https://dummyapi.skillerwhale")
    ? dummyFetch(path, requestInit)
    : fetch(requestInfo, requestInit);
};

export type Article = {
  id: string;
  title: string;
  author: string;
  tag: string;
  date: Date;
  whales: string[];
  content: string[];
  imageSrc: string;
};

const isArticle = (article: any): article is Article => {
  return (
    typeof article === "object" &&
    typeof article.id === "string" &&
    typeof article.title === "string" &&
    typeof article.author === "string" &&
    typeof article.tag === "string" &&
    typeof article.date === "string" &&
    Array.isArray(article.whales) &&
    Array.isArray(article.content) &&
    typeof article.imageSrc === "string"
  );
};

const articles: Article[] = [
  {
    ...dummyArticles[0],
    author: "Ada the Skiller Whale",
    tag: dummyArticles[0].tag[0],
    date: new Date("2021-01-01"),
  },
  {
    ...dummyArticles[1],
    author: "Ada the Skiller Whale",
    tag: dummyArticles[0].tag[0],
    date: new Date("2021-01-01"),
  },
  {
    ...dummyArticles[2],
    author: "Ada the Skiller Whale",
    tag: dummyArticles[0].tag[0],
    date: new Date("2021-01-01"),
  },
];

const dummyFetch = async (
  path: string,
  requestInit: RequestInit = { method: "GET" },
): Promise<Response> => {
  // simulate network delay
  const delay = Math.random() * 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));

  // collection
  if (path === "https://dummyapi.skillerwhale/articles") {
    // get all articles
    if (requestInit.method === "GET") {
      return new Response(`{"data":${JSON.stringify(articles)}}`);
    }
    // save new article
    if (requestInit.method === "POST") {
      if (!requestInit.body || typeof requestInit.body !== "string") {
        return new Response(
          `{"error":"bad request: new article request body should be a JSON string"}`,
        );
      }
      try {
        const newArticle = { ...JSON.parse(requestInit.body), id: uuid.v4() };
        if (!isArticle(newArticle)) {
          return new Response(
            `{"error":"bad request: valid JSON, but not a valid article object"}`,
          );
        }
        articles.push(newArticle);
        return new Response(`{"data":${JSON.stringify(newArticle)}}`);
      } catch {
        return new Response(`{"error":"bad request: invalid JSON string"}`);
      }
    }
  }

  // image
  if (
    path === "https://dummyapi.skillerwhale/images" &&
    requestInit.method === "POST"
  ) {
    if (!requestInit.body) {
      return new Response(
        `{"error":"bad request: no image data included in request body"}`,
      );
    }
    if (!(requestInit.body instanceof Blob)) {
      return new Response(
        `{"error":"bad request: image data should be a Blob"}`,
      );
    }
    return new Response(`{"data":{"uri":"${lastReadImageSrc}"}}`);
  }

  // item
  if (
    path.match(
      /^https:\/\/dummyapi.skillerwhale\/articles\/articles\/[a-z0-9-]+$/,
    )
  ) {
    // get article
    if (requestInit.method === "GET") {
      const article = articles.find(
        (article: Article) => article.id === path.split("/").pop(),
      );
      return article
        ? new Response(`{"data":${JSON.stringify(article)}}`)
        : new Response(`{"error":"not found"}`);
    }
    // delete article
    if (requestInit.method === "DELETE") {
      const articleIndex = articles.findIndex(
        (article: Article) => article.id === path.split("/").pop(),
      );
      if (articleIndex === -1) {
        return new Response(`{"error":"not found"}`);
      } else {
        articles.splice(articleIndex, 1);
        return new Response(`{"data":{}}`);
      }
    }
  }

  // everything else is an error
  return new Response(`{"error":"bad request"}`);
};
