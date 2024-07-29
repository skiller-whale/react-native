import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const articles = sqliteTable("articles", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  imageSrc: text("image_src"),
});

export const content = sqliteTable("content", {
  articleId: text("article_id")
    .notNull()
    .references(() => articles.id),
  value: text("value").notNull(),
});
