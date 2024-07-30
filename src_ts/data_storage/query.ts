import { eq } from "drizzle-orm";
import type { ExpoSQLiteDatabase } from "drizzle-orm/expo-sqlite";
import type { Article } from "../../lib/data/articles.ts";
import { articles, content, type Schema } from "./schema.ts";

export const getArticles = async (drizzleDB: ExpoSQLiteDatabase<Schema>) => {
  const articles = await drizzleDB.query.articles.findMany();
  const content = await drizzleDB.query.content.findMany();
  return articles.map((article) => ({
    ...article,
    content: content
      .filter((c) => c.articleId === article.id)
      .map((c) => c.value),
  })) as Article[];
};

export const insertArticle = async (
  drizzleDB: ExpoSQLiteDatabase<Schema>,
  article: Article,
  imageSrc?: string,
) => {
  const existing = await drizzleDB
    .select()
    .from(articles)
    .where(eq(articles.id, article.id));
  if (existing.length === 0) {
    await drizzleDB
      .insert(articles)
      .values({ id: article.id, title: article.title, imageSrc: imageSrc ?? null });
    for (const value of article.content) {
      await drizzleDB.insert(content).values({ articleId: article.id, value });
    }
  }
};
