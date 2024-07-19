import { useThemeColor } from "@/hooks/useThemeColor";
import { TextInput } from "react-native";

export function Input(props: {
  className: string;
  secure?: boolean;
  setValue?: Function;
  value?: string;
}) {
  return (
    <TextInput
      secureTextEntry={props.secure}
      cursorColor={useThemeColor("primary")}
      onChangeText={(text) => props.setValue && props.setValue(text)}
      value={props.value}
      style={{
        backgroundColor: useThemeColor("input"),
      }}
      className={"h-12 p-2 rounded-xl font-medium text-xl " + props.className}
    />
  );
}
