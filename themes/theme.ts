import { ITheme } from "../emotion";

const red: string = "#cc241d";
const green: string = "#98971a";
const yellow: string = "#d79921";
const blue: string = "#458588";
const magenta: string = "#b16286";
const black: string = "#282828";
const white: string = "#FFFFFF";

export const theme: ITheme = {
  fonts: {
    title: "Alfa Slab One, serif",
    main: `Open Sans, sans-serif`,
  },
  spacings: {
    xxSmall: ".25rem",
    xSmall: ".5rem",
    small: "1rem",
    medium: "2rem",
    large: "3rem",
    xLarge: "4rem",
    xxLarge: "6rem",
  },
  colors: {
    yellow: yellow,
    green: green,
    red: red,
    magenta: magenta,
    black: black,
    white: white,
    blue: blue,
  },
  shadows: {
    small:
      "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;",
    medium:
      "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
    large: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
};
