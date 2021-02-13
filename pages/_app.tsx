/* import "../styles/global.css"; */
import { ThemeProvider, Global, css } from "@emotion/react";
import { AppProps } from "next/app";
import { theme } from "../themes/theme";
import { GlobalProvider } from "../contexts/GlobalContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }
            a {
              color: inherit;
              text-decoration: none;
            }
            * {
              box-sizing: border-box;
            }
            ul {
              padding: 0;
            }
          `}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </GlobalProvider>
  );
}

export default MyApp;
