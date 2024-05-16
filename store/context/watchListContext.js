import { createContext, useReducer } from "react";

export const WatchListContext = createContext({
  watchList: [],
  addToWatchList: (id) => {},
  removeFromWatchList: (id) => {},
});

export const WatchListContextProvider = ({ children }) => {
  const watchListReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        return [action.payload, ...state];
      case "REMOVE":
        return state.filter((neoId) => neoId !== action.payload);
      default:
        return state;
    }
  };

  const [watchListState, dispatch] = useReducer(watchListReducer, []);

  const addToWatchList = (id) => {
    dispatch({ type: "ADD", payload: id });
  };

  const removeFromWatchList = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const contextValue = {
    watchList: watchListState,
    addToWatchList,
    removeFromWatchList,
  };

  return (
    <WatchListContext.Provider value={contextValue}>
      {children}
    </WatchListContext.Provider>
  );
};
