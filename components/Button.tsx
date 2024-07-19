import { useThemeColor } from "@/hooks/useThemeColor";
import { Pressable, Text, View } from "react-native";

export function Button(props: {
  title: string;
  width?: number;
  height?: number;
  onPress?: Function;
  className?: string;
}) {
  return (
    <View
      style={{ width: props.width, height: props.height }}
      className={"rounded-xl overflow-hidden " + props.className}
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
        className="min-h-16 w-32 bg-primary disabled:bg-gray-500"
      >
        <Text
          style={{
            color: "white",
          }}
          className="m-auto p-4 w-fit text-2xl font-bold text-center"
        >
          {props.title}
        </Text>
      </Pressable>
    </View>
  );
}
