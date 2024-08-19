import { View, type ViewProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

export function ThemedView(props: ViewProps) {
  return (
    <View
      className={props.className}
      style={[
        { backgroundColor: useThemeColor("background"), flex: 1 },
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
}
