import { createContext, type Dispatch } from "react";

type State = LoggedInState | LoggedOutState;

type LoggedInState = {
  loggedIn: true;
  articlesWithFeedback: string[];
};

type LoggedOutState = {
  loggedIn: false;
  freeArticlesRemaining: number;
};

type Action =
  | { type: "login" }
  | { type: "logout" }
  | { type: "readArticle" }
  | { type: "submitFeedback"; articleId: string; };

export const stateReducer = (state: State, action: Action): State => {
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
            articlesWithFeedback: [...state.articlesWithFeedback, action.articleId],
          }
        : state;
  }
};

export const initialState: State = {
  loggedIn: false,
  freeArticlesRemaining: 3,
};

export const StateContext = createContext<State>(initialState);

export const DispatchContext = createContext<Dispatch<Action>>(() => {});
