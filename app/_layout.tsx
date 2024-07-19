import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import * as SplashScreen from "expo-splash-screen";
import "../global.css";
import { Header } from "@/components/Header";
import { ThemedView } from "@/components/ThemedView";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Nunito_Medium: require("../assets/fonts/Nunito-Medium.ttf"),
    Nunito_Semibold: require("../assets/fonts/Nunito-SemiBold.ttf"),
    Nunito_Bold: require("../assets/fonts/Nunito-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  const headerBackgroundColor = useThemeColor("foreground");

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack
      initialRouteName="login"
      screenOptions={{
        headerTitle: (props) => <Header {...props} />,
        headerStyle: {
          backgroundColor: headerBackgroundColor,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="login" options={{ headerShown: false }} />
    </Stack>
  );
}
