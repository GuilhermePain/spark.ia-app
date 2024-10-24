import { useThemeColor } from '@/hooks';
import { router } from '@/router';

const useGetStyling = () => {
  const backButtonColor = useThemeColor('text-2');
  const backButtonShown = router.canGoBack();
  const textColor = useThemeColor('text-2');

  const viewClassName = 'flex flex-row p-2 w-full';
  const imageClassName = 'w-10 h-12 aspect-[7/10] my-2';
  const textClassName = 'ml-4 text-2xl my-auto';
  const touchableOpacityClassName = 'mr-3 z-30';
  const buttonClassName = 'my-auto ml-auto right-8 aspect-square';

  const textStyle = {
    color: textColor,
    fontFamily: 'Semibold',
  };

  return {
    backButtonColor,
    backButtonShown,
    imageClassName,
    textStyle,
    textClassName,
    viewClassName,
    touchableOpacityClassName,
    buttonClassName,
  };
};

export default useGetStyling;
