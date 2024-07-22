import { useColorScheme } from "react-native";
export function useThemeMascot(inverted?: boolean) {
  const darkMode = useColorScheme();

  if (inverted !== undefined) {
    return darkMode !== "dark"
      ? require("../assets/images/logo-preta.png")
      : require("../assets/images/logo-branca.png");
  } else {
    return darkMode === "dark"
      ? require("../assets/images/logo-preta.png")
      : require("../assets/images/logo-branca.png");
  }
}
