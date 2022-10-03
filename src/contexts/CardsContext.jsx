import React, { useContext, useReducer } from "react";

const CardContext = React.createContext();

const initialState = {
  cards: [{ title: "My card" }, { title: "Home" }, { title: "Study" }],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "add":
      return { cards: [...state.cards, { title: payload }] };
    default:
      throw new Error();
  }
};

export function useCard() {
  return useContext(CardContext);
}

export function CardProvider({ children }) {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const reduce = useReducer(reducer, initialState);

  return <CardContext.Provider value={reduce}>{children}</CardContext.Provider>;
}
