import articles from "../../lib/data/articles.ts";
import whales from "../../lib/data/whales.ts";

export const toTitleCase = (string) =>
  string.length ? `${string[0].toUpperCase()}${string.slice(1)}` : string;

export const getArticleTitleFromID = (id) =>
  articles.find((article) => article.id === id)?.title ?? "Article not found.";

export const getWhaleNameFromID = (id) =>
  whales.find((whale) => whale.id === id)?.name ?? "Whale not found.";
