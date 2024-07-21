import { Image, useColorScheme, View } from "react-native";
import { ThemedText } from "./ThemedText";

export function Message(props: { sender: "spark" | string; content: string }) {
  const darkMode = useColorScheme();
  let image;
  if (props.sender === "spark") {
    image =
      darkMode === "light"
        ? require("../assets/images/logo-preta.png")
        : require("../assets/images/logo-branca.png");
  } else {
    image = require("../assets/images/user-placeholder.jpg");
  }
  return (
    <View className="text-left h-fit w-11/12 pr-10 mx-auto mt-2">
      <View className="flex flex-row">
        <Image
          className={`${
            props.sender === "spark" ? "aspect-[7/10]" : "rounded-full"
          } w-8 h-8`}
          source={image}
        />
        <View className="ml-3">
          <ThemedText
            fontSize={20}
            className="capitalize my-auto"
            type="defaultSemiBold"
          >
            {props.sender}
          </ThemedText>
          <ThemedText
            className="text-wrap break-all h-fit"
            fontSize={18}
            type="default"
          >
            {props.content}
          </ThemedText>
        </View>
      </View>
    </View>
  );
}
