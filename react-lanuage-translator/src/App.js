import logo from "./logo.svg";
import "./App.css";
import { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const locales = {
    en: { title: "English" },
    de: { title: "German" },
    fr: { title: "French" },
    es: { title: "Spanish" },
    hi_IN: { title: "Hindi" },
  };

  const { t, i18n } = useTranslation();
  const [selectedLocale, setSelectedLocale] = useState(i18n.resolvedLanguage);

  const handleLanguageChange = (locale) => {
    i18n.changeLanguage(locale);
    setSelectedLocale(locale);
  };

  return (
    <div>
      <ul>
        {Object.keys(locales).map((locale) => (
          <li key={locale}>
            <button
              style={{
                fontWeight: selectedLocale === locale ? "bold" : "normal",
              }}
              type="button"
              onClick={() => handleLanguageChange(locale)}
            >
              {locales[locale].title}
            </button>
          </li>
        ))}
      </ul>
      <h1>{t("main.header")}</h1>
      <p>{t("main.description")}</p>

      <h3>Select Options:</h3>
      <ul>
        {Object.keys(locales).map((locale) => (
          <li key={locale}>
            <strong>{t(`main.select.options.${locale}.value`)}</strong> -{" "}
            {t(`main.select.options.${locale}.description`)}
          </li>
        ))}
      </ul>

      <h3>Informative Paragraphs:</h3>
      <div>
        {t("main.informative.paragraphs", { returnObjects: true }).map(
          (paragraph, index) => (
            <div key={index} style={{ marginBottom: "1rem" }}>
              <h4>{paragraph.title}</h4>
              <p>{paragraph.content}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  );
}
