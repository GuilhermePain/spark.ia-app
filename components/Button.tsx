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
  hollow?: boolean;
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
          color: !props.hollow
            ? useThemeColor("primary-focus")
            : "rgba(253, 173, 11, 0.1)",
        }}
        className={`min-h-12 w-32 ${
          props.hollow
            ? "border-2 dark:border-white border-primary rounded-2xl"
            : "bg-primary"
        } disabled:bg-gray-500`}
      >
        <Text
          style={{
            color: props.hollow ? useThemeColor("hollow-button-text") : "white",
            margin: "auto",
          }}
          className="p-3 w-fit text-[1.75rem] font-bold text-center"
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
