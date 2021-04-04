import { createContext, useContext } from "react";

// TODO refactor this parameters
// const defaultContext = {
//   queryInput: "World Peoples",
//   selectedCollection: "happiness"
// }

const SearchContext = createContext(null)

export const SearchProvider = SearchContext.Provider;
export const useSearch = () => useContext(SearchContext)