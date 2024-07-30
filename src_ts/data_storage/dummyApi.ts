import articles, { type Article } from "../../lib/data/articles.ts";

// toggle this when instructed
export const ONLINE = true;

export default async (
  requestInfo: RequestInfo,
  requestInit?: RequestInit,
): Promise<Response> => {
  const path = typeof requestInfo === "string" ? requestInfo : requestInfo.url;
  return path.startsWith("https://dummyapi.skillerwhale")
    ? dummyFetch(path, requestInit)
    : fetch(requestInfo, requestInit);
};

const dummyFetch = async (
  path: string,
  requestInit: RequestInit = { method: "GET" },
): Promise<Response> => {
  // simulate network error when offline
  if (!ONLINE) {
    throw new Error("could not connect to remote server");
  }

  // simulate network delay
  const delay = Math.random() * 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));

  // collection
  if (path === "https://dummyapi.skillerwhale/articles") {
    // get all articles
    if (requestInit.method === "GET") {
      return new Response(`{"data":${JSON.stringify(articles)}}`);
    }
  }

  // item
  if (path.match(/^https:\/\/dummyapi.skillerwhale\/articles\/[a-z0-9-]+$/)) {
    // get article
    if (requestInit.method === "GET") {
      const article = articles.find(
        (article: Article) => article.id === path.split("/").pop(),
      );
      return article
        ? new Response(`{"data":${JSON.stringify(article)}}`)
        : new Response(`{"error":"not found"}`);
    }
  }

  // image
  if (path.match(/^https:\/\/dummyapi.skillerwhale\/images\/[a-z0-9-]+$/)) {
    return new Response(`{"data":"todo"}`);
  }

  // everything else is an error
  return new Response(`{"error":"bad request"}`);
};
