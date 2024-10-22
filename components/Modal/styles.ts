import { useThemeColor } from '@/hooks';
import { ViewStyle, ImageStyle } from 'react-native';

export const useGetStyling = (sender: 'spark' | string) => {
  const textColor = useThemeColor('text');

  const styles = {
    container: 'mx-auto text-left h-fit w-11/12 pr-10 mt-2',
    textContainer: 'flex flex-row',
    senderText: 'capitalize my-auto',
    contentText: 'break-all h-fit',
  };

  const imageStyle: ImageStyle = {
    width: 32,
    height: 32,
    borderRadius: sender === 'spark' ? 0 : 16,
    aspectRatio: sender === 'spark' ? 7 / 10 : undefined,
  };

  const loadingStyle: ViewStyle = {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: textColor,
    transform: [{ scale: 1 }],
  };

  return {
    styles,
    imageStyle,
    loadingStyle,
  };
};

export default useGetStyling;
