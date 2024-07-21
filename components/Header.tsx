import { Image, View, Text, Pressable, TouchableOpacity } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { useColorScheme } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { router } from "expo-router";

const routeNames: { [key: string]: string } = {
  chat: "Chatbot",
};

export function Header(props: {
  children: string;
  tintColor?: string;
  backButtonShown: boolean;
}) {
  
  //TODO: Resolver bug do backButton

  return (
    <View className="flex flex-row p-2">
      {props.backButtonShown === true && (
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          className="mr-3 z-30"
        >
          <FontAwesomeIcon
            style={{ marginVertical: "auto" }}
            color={useThemeColor("text-2")}
            size={25}
            icon={faArrowLeft}
          />
        </TouchableOpacity>
      )}
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
        {Object.keys(routeNames).includes(props.children)
          ? routeNames[props.children]
          : props.children}
      </Text>
    </View>
  );
}
