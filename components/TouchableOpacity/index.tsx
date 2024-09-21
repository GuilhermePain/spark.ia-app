import { TouchableOpacity as TouchableOpacityBase } from "react-native";
import { TouchableOpacityProps as TouchableOpacityBaseProps } from "react-native";

export default function TouchableOpacity(props: TouchableOpacityProps) {
  return <TouchableOpacityBase {...props} />;
}

export interface TouchableOpacityProps extends TouchableOpacityBaseProps {}
