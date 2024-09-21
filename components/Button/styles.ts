import { useThemeColor } from "@/hooks/useThemeColor";
import { TextStyle } from "../Text";
import { ButtonProps } from ".";

const useGetStyling = (props: ButtonProps) => {
  const hollow = props.hollow ?? false;
  const width = props.width;
  const height = props.height;
  const className = props.className ?? "";

  const containerClassName = "rounded-2xl overflow-hidden " + className;

  const androidRippleColor = !hollow
    ? useThemeColor("primary-focus")
    : "rgba(253, 173, 11, 0.1)";

  const androidRippleConfig = {
    color: androidRippleColor,
  };

  const textColor = hollow ? useThemeColor("hollow-button-text") : "white";

  const pressableClassName = `min-h-12 w-32 ${
    hollow
      ? "border-2 dark:border-white border-primary rounded-2xl"
      : "bg-primary"
  } disabled:bg-gray-500`;

  const textClassName = "p-3 w-fit text-[1.75rem] font-bold text-center";

  const textStyle = {
    color: textColor,
    margin: "auto",
  } as TextStyle;

  const containerStyle = {
    width: width,
    height: height,
  };

  return {
    containerClassName,
    androidRippleConfig,
    containerStyle,
    textStyle,
    pressableClassName,
    textClassName,
  };
};

export default useGetStyling;