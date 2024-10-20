import Text, { TextProps } from '../Text';
import { useThemeColor } from '@/hooks';
import useGetStyling from './styles';

export default function ThemedText({
  style,
  fontSize,
  type = 'default',
  className,
  centered,
  styleWithClassName,
  lineHeight,
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor('text');
  const styles = useGetStyling();

  return (
    <Text
      style={
        !styleWithClassName && [
          centered && { marginHorizontal: 'auto' },
          { color },
          type === 'default' ? styles.default : undefined,
          type === 'title' ? styles.title : undefined,
          type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
          type === 'subtitle' ? styles.subtitle : undefined,
          type === 'link' ? styles.link : undefined,
          type === 'label' ? styles.label : undefined,
          style,
          fontSize !== undefined && { fontSize },
          lineHeight !== undefined && { lineHeight: lineHeight },
        ]
      }
      className={`text-neutral-dark dark:text-neutral ${className}`}
      {...rest}
    />
  );
}

export interface ThemedTextProps extends TextProps {
  fontSize?: number;
  styleWithClassName?: boolean;
  centered?: boolean;
  lineHeight?: number;
  type?:
    | 'default'
    | 'title'
    | 'defaultSemiBold'
    | 'subtitle'
    | 'link'
    | 'label';
}
