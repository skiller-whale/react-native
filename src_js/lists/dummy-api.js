import uuid from "react-native-uuid";
import articles from "../../lib/data/articles.ts";

const lotsOfArticles = new Array(100)
  .fill(0)
  .map((_, index) => index)
  .map(() =>
    articles.map((article) => ({
      ...article,
      id: uuid.v4().toString(),
    })),
  )
  .flat();

const response = (offset, limit) =>
  ({
    json: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve(lotsOfArticles.slice(offset, offset + limit));
        }, Math.random() * 1000);
      }),
  });

export const fetchArticles = (offset, limit) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(response(offset, limit));
    }, Math.random() * 1000);
  });

export const refreshArticle = (id) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const article = lotsOfArticles.find((article) => article.id === id);
      resolve({ ...article, update: getRandomUpdate() });
    }, Math.random() * 1000);
  });

const updates = [
  "Breaking news: This has just happened again!",
  "Apology: Subsequent investigation has revealed that everything in this article is completely wrong. We apologise for any inconvenience caused.",
  "This article has been updated to include the latest punctuation.",
  "Renowned marine biologist Dr Judi Tench has gone on record to say that this is the best article she has ever read.",
  "This article was written by a computer.",
  "Update: No whales were harmed in the making of this article.",
  "This article is not available in your region. Below is a copy of a different and completely fictional article.",
  "Warning: This article will self-destruct in 5 seconds.",
  "This article contains information that some readers may find disturbing. Discretion is advised.",
  "We regret to inform you that the secret to eternal youth that was previously published in this article has been removed due to a court order.",
];

const getRandomUpdate = () =>
  updates[Math.floor(Math.random() * updates.length)];
