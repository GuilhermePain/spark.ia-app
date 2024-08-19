import { Pressable, Text, View } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { router } from "expo-router";
export function SubjectCard(props: { subject: string; icon: IconDefinition }) {
  return (
    <View className="rounded-lg w-11/12 aspect-square mx-auto my-2 overflow-hidden">
      <Pressable
        onPress={() => router.navigate("/flashcard")}
        android_ripple={{
          color: useThemeColor("primary-focus"),
        }}
        className="bg-primary w-full h-full flex-row flex"
      >
        <View className="m-auto flex-row">
          <FontAwesomeIcon
            color="white"
            style={{ marginVertical: "auto", marginRight: 5 }}
            icon={props.icon}
          />
          <Text className="text-white font-bold text-2xl">{props.subject}</Text>
        </View>
      </Pressable>
    </View>
  );
}
