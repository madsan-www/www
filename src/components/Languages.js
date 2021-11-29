import React from "react";
import { navigate } from "gatsby";
import { useLocale } from "../hooks/locale";
import useLanguageMapping from "./useLanguageMapping";
import LocalizedLink from "./LocalizedLink";

const Languages = ({ location }) => {
  // Grab the locale (passed through context) from the Locale Provider
  // through useLocale() hook
  const { locale } = useLocale();

  const languageMapping = useLanguageMapping();

  function handleClickLanguage(e, lang) {
    e.preventDefault();
    if (locale === lang) return;

    const url = window.location.pathname.split("/").pop();

    if (!url) return lang === "tr" ? navigate(`/`) : navigate(`/${lang}`);

    const associatedUrls = languageMapping.find(item => {
      let hasUrl = false;

      Object.entries(item).forEach(([key, value]) => {
        if (value.split("/").pop() === url) return (hasUrl = true);
      });

      return hasUrl;
    });

    if (!associatedUrls) return navigate("/");

    return lang === "tr"
      ? navigate(`/${associatedUrls[lang]}`)
      : navigate(`/${lang}/${associatedUrls[lang]}`);
  }

  return (
    <li className="d-flex">
      <LocalizedLink
        to="/"
        onClick={e => handleClickLanguage(e, "en")}
      >
        🇺🇸
      </LocalizedLink>
      <LocalizedLink
        to="/"
        onClick={e => handleClickLanguage(e, "tr")}
      >
        🇹🇷
      </LocalizedLink>
    </li>
  );
};

export default Languages;
