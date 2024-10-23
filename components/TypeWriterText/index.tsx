import TypeWriter from 'react-native-typewriter';
import useGetStyling from './styles';
import { TextStyle } from '../Text';

export default function TypeWriterText(props: TypeWriterTextProps) {
  const styles = useGetStyling();
  return (
    <TypeWriter
      typing={1}
      minDelay={props.faster ? 0.2 : 1}
      maxDelay={props.faster ? 0.2 : 1}
      style={styles.typewriter as TextStyle}
      {...props}
    >
      {props.content}
    </TypeWriter>
  );
}

export interface TypeWriterTextProps {
  className?: string;
  content?: string;
  faster?: boolean;
}
