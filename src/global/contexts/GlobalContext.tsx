import { createContext, FC } from "react";

import IGlobalContext from "../models/global.context";
import dropdownConfig from "../config/dropdown.config";

const initialValue: IGlobalContext = { parties: [], items: [], companies: [], dropdownConfig };

export const GlobalContext = createContext(initialValue);

export const GlobalContextProvider: FC = ({ children }) => {



    return (
        <GlobalContext.Provider value={initialValue}>
            {children}
        </GlobalContext.Provider>
    )
}