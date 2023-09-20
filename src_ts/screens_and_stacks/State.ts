import { Dispatch, createContext } from "react";
import articles, { type Article } from "./data/articles.ts";
import whales, { type Whale } from "./data/whales.ts";

type State = {
  articles: Article[];
  whales: Whale[];
};

type Action = { type: "refresh" };

const randomState = (): State => {
  const randomArticles = articles
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.floor(Math.random() * articles.length + 1));
  const randomWhales = whales.filter((whale) =>
    randomArticles.some((article) => article.whales.includes(whale.id))
  );

  return {
    articles: randomArticles,
    whales: randomWhales,
  };
};

export const stateReducer = (_: State, action: Action): State => {
  switch (action.type) {
    case "refresh":
      return randomState();
  }
};

export const initialState = randomState();

export const StateContext = createContext<State>(initialState);

export const DispatchContext = createContext<Dispatch<Action>>((_) => {});
