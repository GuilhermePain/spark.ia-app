import { View as ViewBase } from "react-native";
import { ViewProps as ViewBaseProps } from "react-native";

export default function View(props: ViewProps) {
  return <ViewBase {...props} />;
}

export interface ViewProps extends ViewBaseProps {}