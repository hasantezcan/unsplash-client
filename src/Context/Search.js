import { createContext, useContext } from "react";

// TODO refactor this parameters
// const defaultContext = {
//   QueryInput = "",
//   Collection = ""
// }

const SearchContext = createContext(null)

export const SearchProvider = SearchContext.Provider;
export const useSearch = () => useContext(SearchContext)