import { Image, View, Text, TouchableOpacity } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { router } from "expo-router";
import { useThemeMascot } from "@/hooks/useThemeMascot";

const routeNames: { [key: string]: string } = {
  chat: "Chatbot",
};

export function Header(props: { children: string; tintColor?: string }) {
  const backButtonColor = useThemeColor("text-2");
  const backButtonShown = router.canGoBack();

  return (
    <View className="flex flex-row p-2">
      {backButtonShown === true && (
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          className="mr-3 z-30"
        >
          <FontAwesomeIcon
            style={{ marginVertical: "auto" }}
            color={backButtonColor}
            size={25}
            icon={faArrowLeft}
          />
        </TouchableOpacity>
      )}
      <Image
        className="w-10 h-12 aspect-[7/10] my-2"
        source={useThemeMascot()}
      />
      <Text
        className="ml-4 text-2xl my-auto"
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
