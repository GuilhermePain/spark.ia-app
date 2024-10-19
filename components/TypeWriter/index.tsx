import TypeWriterBase from 'react-native-typewriter';

export default function TypeWriter(props: TypeWriterProps) {
  return <TypeWriterBase {...props} />;
}

interface TypeWriterProps extends React.ComponentProps<typeof TypeWriterBase> {
  className: string;
}
