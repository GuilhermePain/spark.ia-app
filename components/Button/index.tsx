import { Pressable, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";
import useGetStyling from "./styles";

export default function Button(props: ButtonProps) {
  const onPress = () => props.onPress && props.onPress();
  const {
    androidRippleConfig,
    containerStyle,
    containerClassName,
    pressableClassName,
    textStyle,
    textClassName,
  } = useGetStyling(props);

  return (
    <View style={containerStyle} className={containerClassName}>
      <Pressable
        onPress={onPress}
        style={containerStyle}
        android_ripple={androidRippleConfig}
        className={pressableClassName}
      >
        <Text style={textStyle} className={textClassName}>
          {props.title}
          {props.icon && (
            <FontAwesomeIcon
              transform="grow-3"
              color="white"
              icon={props.icon}
            />
          )}
        </Text>
      </Pressable>
    </View>
  );
}

export interface ButtonProps {
  title?: string;
  icon?: IconDefinition;
  width?: number;
  height?: number;
  onPress?: Function;
  className?: string;
  hollow?: boolean;
}
