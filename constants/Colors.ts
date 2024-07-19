/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    primary: "#FA7807",
    "primary-focus": "#FDAD0B",
    input: "#f3f4f6",
    text: "#11181C",
    "text-2": "#ECEDEE",
    foreground: "#011F3B",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    primary: "#FA7807",
    "primary-focus": "#FDAD0B",
    input: "#f3f4f6",
    text: "#ECEDEE",
    "text-2": "#11181C",
    foreground: "#FFF",
    background: "#011F3B",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};
