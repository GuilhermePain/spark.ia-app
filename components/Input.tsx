import { useThemeColor } from "@/hooks/useThemeColor";
import { TextInput } from "react-native";

export function Input(props: {
  border?: boolean;
  className: string;
  secure?: boolean;
  setValue?: Function;
  value?: string;
  placeholder?: string;
}) {
  return (
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor="#aaa"
      secureTextEntry={props.secure}
      cursorColor={useThemeColor("primary")}
      selectionColor={useThemeColor("primary-focus")}
      onChangeText={(text) => props.setValue && props.setValue(text)}
      value={props.value}
      style={{
        backgroundColor: useThemeColor("input"),
        borderColor: useThemeColor("input-border"),
        borderWidth: props.border ? 1 : 0,
      }}
      className={"h-12 p-2.5 rounded-xl font-medium text-xl " + props.className}
    />
  );
}
