import { Provider } from "react-redux";
import store from "../store";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import * as locales from "../public/static/locales";
import "../styles/globals.scss";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [locale, setLocale] = useState("en");
  const router = useRouter();
  const { defaultLocale, pathname } = router;
  console.log(defaultLocale, pathname);
  const localeCopy = locales[locale];
  console.log(localeCopy);

  return (
    <Provider store={store}>
      <IntlProvider
        locale={locale}
        defaultLocale={defaultLocale}
        messages={localeCopy}
      >
        <button
          onClick={() => (locale === "ar" ? setLocale("en") : setLocale("ar"))}
        >
          Change language
        </button>
        <Component {...pageProps} />
      </IntlProvider>
    </Provider>
  );
}

export default MyApp;
