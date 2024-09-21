import { Text as TextBase } from "react-native";
import { TextProps as TextBaseProps } from "react-native";

export default function Text(props: TextProps) {
  return <TextBase {...props} />;
}

export interface TextProps extends TextBaseProps {}
export type TextStyle = TextProps["style"];