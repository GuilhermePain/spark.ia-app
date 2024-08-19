import { View } from "react-native";

export function HorizontalLine(props: { big?: boolean }) {
  return (
    <View
      className={`h-1 ${
        props.big ? "w-full" : "w-1/2"
      } my-3 bg-primary rounded-md`}
    />
  );
}
