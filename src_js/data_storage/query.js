import { eq } from "drizzle-orm";
import { articles, content } from "./schema.js";

export const getArticles = async (drizzleDB) => {
  const articles = await drizzleDB.query.articles.findMany();
  const content = await drizzleDB.query.content.findMany();
  return articles.map((article) => ({
    ...article,
    content: content
      .filter((c) => c.articleId === article.id)
      .map((c) => c.value),
  }));
};

export const insertArticle = async (drizzleDB, article, imageSrc) => {
  const existing = await drizzleDB
    .select()
    .from(articles)
    .where(eq(articles.id, article.id));
  if (existing.length === 0) {
    await drizzleDB
      .insert(articles)
      .values({ id: article.id, title: article.title, imageSrc });
    for (const value of article.content) {
      await drizzleDB.insert(content).values({ articleId: article.id, value });
    }
  }
};
