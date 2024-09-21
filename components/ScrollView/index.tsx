import { ScrollView as ScrollViewBase } from "react-native";
import { ScrollViewProps as ScrollViewBaseProps } from "react-native";

export default function ScrollView(props: ScrollViewProps) {
  return <ScrollViewBase {...props} />;
}

export interface ScrollViewProps extends ScrollViewBaseProps {}