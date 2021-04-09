import { createContext, useContext } from "react";

const ResultContext = createContext(null);

export const ResultProvider = ResultContext.Provider;
export const useResult = () => useContext(ResultContext);
