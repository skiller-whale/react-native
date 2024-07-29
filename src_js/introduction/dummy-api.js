import articles from "../../lib/data/articles.ts";

const response = {
  json: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(articles);
      }, Math.random() * 1000);
    }),
};

export default (_) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(response);
    }, Math.random() * 1000);
  });
