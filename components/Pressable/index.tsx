import { Pressable as PressableBase } from "react-native";
import { PressableProps as PressableBaseProps } from "react-native";

export default function Pressable(props: PressableProps) {
  return <PressableBase {...props} />;
}

export interface PressableProps extends PressableBaseProps {}