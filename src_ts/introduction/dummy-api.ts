import articles, { type Article } from "../../lib/data/articles.ts";

const response = {
  json: () => new Promise<Article[]>((resolve) => {
    setTimeout(() => {
      resolve(articles);
    }, Math.random() * 1000);
  })
} as const;

export default (_: "/dummy/api/articles") => new Promise<typeof response>((resolve) => {
  setTimeout(() => {
    resolve(response);
  }, Math.random() * 1000);
});
