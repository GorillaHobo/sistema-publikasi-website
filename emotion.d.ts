import "@emotion/react";

export interface ITheme {
  colors: {
    black: string;
    white: string;
    yellow: string;
    green: string;
    red: string;
    magenta: string;
    blue: string;
  };
  fonts: {
    title: string;
    main: string;
  };
  spacings: {
    xxSmall: string;
    xSmall: string;
    small: string;
    medium: string;
    large: string;
    xLarge: string;
    xxLarge: string;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
}

declare module "@emotion/react" {
  export interface Theme extends ITheme {}
}
