import { useThemeColor } from "@/hooks/useThemeColor";
import { Pressable, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";

export function Button(props: {
  title?: string;
  icon?: IconDefinition;
  width?: number;
  height?: number;
  onPress?: Function;
  className?: string;
}) {
  return (
    <View
      style={{ width: props.width, height: props.height }}
      className={"rounded-2xl overflow-hidden " + props.className}
    >
      <Pressable
        onPress={() => props.onPress && props.onPress()}
        style={{
          width: props.width,
          height: props.height,
        }}
        android_ripple={{
          color: useThemeColor("primary-focus"),
        }}
        className="min-h-12 w-32 bg-primary disabled:bg-gray-500"
      >
        <Text
          style={{
            color: "white",
          }}
          className="m-auto p-3 w-fit text-[1.75rem] font-bold text-center"
        >
          {props.title}
          {props.icon && (
            <FontAwesomeIcon
              transform="grow-3"
              color="white"
              icon={props.icon}
            />
          )}
        </Text>
      </Pressable>
    </View>
  );
}
