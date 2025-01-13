import logo from "./logo.svg";
import "./App.css";
import { Suspense, useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const locales = {
    en: { title: "English" },
    de: { title: "german" },
    fr: { title: "french" },
    es: { title: "Español" },
  };

  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState(0);
  return (
    <div>
      <ul>
        {Object.keys(locales).map((locale) => (
          <li key={locale}>
            <button
              style={{
                fontWeight:
                  i18n.resolvedLanguage === locale ? "bold" : "normal",
              }}
              type="submit"
              onClick={() => i18n.changeLanguage(locale)}
            >
              {locales[locale].title}
            </button>
          </li>
        ))}
      </ul>
      <h1>{t("main.header")}</h1>
      <h3>{t("main.description")}</h3>
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
