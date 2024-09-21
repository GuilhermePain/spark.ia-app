import { View, type ViewProps } from "react-native";
import useGetStyling from "./styles";

export default function ThemedView(props: ViewProps) {
  const styles = useGetStyling();
  return (
    <View
      className={props.className}
      style={[styles.container, props.style]}
    >
      {props.children}
    </View>
  );
}
