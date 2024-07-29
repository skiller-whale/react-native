import { createContext } from "react";

export const stateReducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { loggedIn: true, articlesWithFeedback: [] };
    case "logout":
      return initialState;
    case "readArticle":
      return state.loggedIn
        ? state
        : {
            ...state,
            freeArticlesRemaining: Math.max(0, state.freeArticlesRemaining - 1),
          };
    case "submitFeedback":
      return state.loggedIn
        ? {
            ...state,
            articlesWithFeedback: [
              ...state.articlesWithFeedback,
              action.articleId,
            ],
          }
        : state;
  }
};

export const initialState = {
  loggedIn: false,
  freeArticlesRemaining: 3,
};

export const StateContext = createContext(initialState);

export const DispatchContext = createContext(() => {});
