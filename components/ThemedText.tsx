import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  fontSize?: number;
  centered?: boolean;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "link"
    | "label";
};

export function ThemedText({
  style,
  fontSize,
  type = "default",
  className,
  centered,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor("text");

  return (
    <Text
      style={[
        centered && { marginHorizontal: "auto" },
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        type === "label" ? styles.label : undefined,
        style,
        fontSize !== undefined && { fontSize: fontSize },
      ]}
      className={className}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Nunito_Medium",
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: "Nunito_Semibold",
  },
  title: {
    fontSize: 30,
    lineHeight: 32,
    fontFamily: "Nunito_Bold",
  },
  subtitle: {
    fontSize: 20,
    fontFamily: "Nunito_Bold",
  },
  label: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: "Nunito_Semibold",
  },
  link: {
    lineHeight: 30,
    fontSize: 20,
    fontFamily: "Nunito_Bold",
    color: "#FA7807",
  },
});
