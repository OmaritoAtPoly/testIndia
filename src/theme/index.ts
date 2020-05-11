import { DefaultTheme } from "react-native-paper";
import { lighten, darken } from "polished";

const primary = '#615550'

export const theme = {
    ...DefaultTheme,
    roundness: 2,

    colors: {
        ...DefaultTheme.colors,
        primary,
        accent: lighten(0.1, primary),
        foreground: '#707070',
        background: '#ffffff',
        secondary: darken(0.14, primary),
        white: '#ffffff',
        black: '#000000'
    }
};