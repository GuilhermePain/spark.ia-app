import TypeWriter from "react-native-typewriter";
import useGetStyling from "./styles";
import { TextStyle } from "../Text";

export default function TypeWriterText(props: TypeWriterTextProps) {
  const styles = useGetStyling();
  return (
    <TypeWriter
      typing={1}
      minDelay={1}
      maxDelay={1}
      style={styles.typewriter as TextStyle}
    >
      {props.content}
    </TypeWriter>
  );
}

export interface TypeWriterTextProps {
  className?: string;
  content?: string;
}
