import React , {useState, useEffect} from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import rtl from "jss-rtl";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@material-ui/styles";
import  App  from "./containers/App";
import { useSelector } from "react-redux";



function Theme() {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const  lang  = useSelector(state => state.locale.lang);
  const [direction, setDirection] = useState(lang === 'en' ? 'ltr' : 'rtl');

  useEffect(() => {
    setDirection(lang === 'en' ? 'ltr' : 'rtl')
  }, [lang])

  const theme = createMuiTheme(
      {
      direction : lang === 'en' ? 'ltr' : 'rtl',
      palette: {
        primary: {
            main : 'rgba(134, 54, 78, 1)'
        },
        secondary : {
            main : 'rgba(234, 134, 133, 1)'
        }
      },
      typography: {
        fontFamily: [
            'Montserrat-Regular',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
    }
    );

    document.body.style.direction = direction;
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StylesProvider>
  );
}

export default Theme;
