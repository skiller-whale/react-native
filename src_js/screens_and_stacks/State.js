import { createContext } from "react";
import articles from "../../lib/data/articles.ts";
import whales from "../../lib/data/whales.ts";

const randomState = () => {
  const randomArticles = [...articles]
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.floor(Math.random() * articles.length + 1));
  const randomWhales = whales.filter((whale) =>
    randomArticles.some((article) => article.whales.includes(whale.id)),
  );

  return {
    articles: randomArticles,
    whales: randomWhales,
  };
};

export const stateReducer = (_, action) => {
  switch (action.type) {
    case "refresh":
      return randomState();
  }
};

export const initialState = randomState();

export const StateContext = createContext(initialState);

export const DispatchContext = createContext((_) => {});
