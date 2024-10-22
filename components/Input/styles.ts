import { InputProps } from '.';
import { useThemeColor } from '@/hooks';
import { TextStyle } from '../Text';

const useGetStyling = (props: InputProps) => {
  const backgroundColor = useThemeColor('input');
  const borderColor = useThemeColor('input-border');
  const cursorColor = useThemeColor('primary');
  const selectionColor = useThemeColor('primary-focus');
  const placeholderColor = '#aaa';

  const inputClassName = `h-12 p-2.5 rounded-xl font-medium text-xl ${
    props.className ?? ''
  }`;

  const inputStyle: TextStyle = {
    backgroundColor,
    borderColor,
    borderWidth: props.border ? 1 : 0,
  };

  return {
    inputStyle,
    inputClassName,
    cursorColor,
    selectionColor,
    placeholderColor,
  };
};

export default useGetStyling;
