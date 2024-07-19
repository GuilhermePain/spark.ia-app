import { View, type ViewProps } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ReactNode } from "react";

export function ThemedView(props: ViewProps) {
  return (
    <View
      style={[
        { backgroundColor: useThemeColor("background"), flex: 1 },
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
}
