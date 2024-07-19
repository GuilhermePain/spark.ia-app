import { Image, View, Text } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useColorScheme } from "react-native";

export function Header(props: { children: string; tintColor?: string }) {
  return (
    <View className="flex flex-row p-2">
      <Image
        className="w-10 h-12 aspect-[7/10] my-2"
        source={
          useColorScheme() == "light"
            ? require("../assets/images/logo-branca.png")
            : require("../assets/images/logo-preta.png")
        }
      />
      <Text
        className="my-auto ml-4 text-2xl"
        style={{
          color: useThemeColor("text-2"),
          fontFamily: "Nunito_Semibold",
        }}
      >
        {props.children}
      </Text>
    </View>
  );
}
