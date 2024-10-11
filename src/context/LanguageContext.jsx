import { createContext, useState } from "react";
import PropTypes from "prop-types";
import langueages from "../data/languages";

export const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {

    const [langType, setLangType] = useState(
        localStorage.getItem("language") || "uz"
    )
    const changeLang = (e) => {
        setLangType(e.target.value)
        localStorage.setItem("language", e.target.value)
    }
    const state = { langType, changeLang, lang: langueages[langType], };
    return (
        <LanguageContext.Provider value={state}>{children}</LanguageContext.Provider>
    )
}

LanguageContextProvider.propTypes = {
    children: PropTypes.node,
}

export default LanguageContextProvider;
