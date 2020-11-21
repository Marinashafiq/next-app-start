import { Provider } from "react-redux";
import store from "../store";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import * as locales from "../public/static/locales";
import "../styles/globals.scss";
import { useEffect, useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import rtl from "jss-rtl";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/styles";

function MyApp({ Component, pageProps }) {
  const [locale, setLocale] = useState("en");
  const router = useRouter();
  const { defaultLocale, pathname } = router;
  const localeCopy = locales[locale];
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const [direction, setDirection] = useState(locale === "en" ? "ltr" : "rtl");
  useEffect(() => {
    document.getElementsByTagName("body")[0].dir = locale === "en" ? "ltr" : "rtl"
  }, []);
  useEffect(() => {
    setDirection(locale === "en" ? "ltr" : "rtl");
    document.getElementsByTagName("body")[0].dir = locale === "en" ? "ltr" : "rtl"
  }, [locale]);

  const theme = createMuiTheme({
    direction: locale === "en" ? "ltr" : "rtl",
    palette: {
      primary: {
        main: "rgba(134, 54, 78, 1)",
      },
      secondary: {
        main: "rgba(234, 134, 133, 1)",
      },
    },
    typography: {
      fontFamily: [
        "Montserrat-Regular",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });
  
  return (
    <Provider store={store}>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <IntlProvider
            locale={locale}
            defaultLocale={defaultLocale}
            messages={localeCopy}
          >
            <button
              onClick={() =>
                locale === "ar" ? setLocale("en") : setLocale("ar")
              }
            >
              Change language
            </button>
            <Component {...pageProps} />
          </IntlProvider>
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  );
}

export default MyApp;
