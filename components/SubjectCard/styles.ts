import { useThemeColor } from '@/hooks/useThemeColor';

const useGetStyling = () => {
  const styles = {
    cardContainer:
      'rounded-lg w-[95%] aspect-square mx-auto my-2 overflow-hidden',
    pressable: `bg-primary w-full h-full flex-row flex`,
    contentContainer: 'm-auto flex-row',
    icon: {
      marginVertical: 'auto',
      marginRight: 5,
    },
    subjectText: 'text-white font-bold text-2xl text-center',
    androidRipple: {
      color: useThemeColor('primary-focus'),
    },
  };

  return {
    styles,
  };
};

export default useGetStyling;
