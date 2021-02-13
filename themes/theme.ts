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
    small: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    medium:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    large:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  },
};
