import TypeWriterBase from "react-native-typewriter";

export default function TypeWriter(props: TypeWriterProps) {
  return <TypeWriterBase {...props} />;
}

type TypeWriterProps = React.ComponentProps<typeof TypeWriterBase>;
