import { useThemeColor } from "@/hooks/useThemeColor";
import TypeWriter from "react-native-typewriter";
import Markdown from "react-native-markdown-display";

export function TypewriterText(props: {
  className?: string;
  content?: string;
}) {
  return (
    <TypeWriter
      typing={1}
      minDelay={1}
      maxDelay={1}
      style={{
        fontFamily: "Nunito_Medium",
        color: useThemeColor("text"),
        fontSize: 18,
        flexWrap: "wrap",
        height: "auto",
      }}
    >
      {props.content}
    </TypeWriter>
  );
}
