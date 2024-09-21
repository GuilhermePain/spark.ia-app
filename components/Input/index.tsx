import { TextInput } from "react-native";
import useGetStyling from "./styles";

export default function Input(props: InputProps) {
  const {
    inputStyle,
    inputClassName,
    placeholderColor,
    cursorColor,
    selectionColor,
  } = useGetStyling(props);
  const onChangeColor = (text: string) => props.setValue && props.setValue(text);

  return (
    <TextInput
      placeholder={props.placeholder}
      placeholderTextColor={placeholderColor}
      secureTextEntry={props.secure}
      cursorColor={cursorColor}
      selectionColor={selectionColor}
      onChangeText={onChangeColor}
      value={props.value}
      style={inputStyle}
      className={inputClassName}
    />
  );
}

export interface InputProps {
  border?: boolean;
  className?: string;
  secure?: boolean;
  setValue?: (value: string) => void;
  value?: string;
  placeholder?: string;
}
