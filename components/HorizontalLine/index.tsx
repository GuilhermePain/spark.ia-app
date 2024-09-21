import { View } from "react-native";
import useGetStyling from "./styles";

export default function HorizontalLine(props: HorizontalLineProps) {
  const { containerClassName } = useGetStyling(props);

  return <View className={containerClassName} />;
}

export interface HorizontalLineProps {
  big?: boolean;
}
