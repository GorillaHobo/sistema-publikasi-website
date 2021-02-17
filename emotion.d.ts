import "@emotion/react";
import { theme } from "./themes/theme";

export type ITheme = typeof theme;
// export interface ITheme {
//   colors: {
//     black: string;
//     blackLight: string;
//     white: string;
//     yellow: string;
//     green: string;
//     red: string;
//     magenta: string;
//     blue: string;
//   };
//   fonts: {
//     title: string;
//     main: string;
//   };
//   spacings: {
//     xxxsm: string;
//     xxsm: string;
//     xsm: string;
//     sm: string;
//     md: string;
//     l: string;
//     xl: string;
//     xxl: string;
//     xxxl: string;
//   };
//   shadows: {
//     small: string;
//     medium: string;
//     large: string;
//   };
//   breakpoints: {
//     mobile: string;
//     tablet: string;
//   };
//   speed: {
//     slow: string;
//     medium: string;
//     fast: string;
//   };
//   transition: {
//     fade: string;
//     slide: string;
//   };
// }

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}
