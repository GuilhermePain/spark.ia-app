import { useThemeColor } from '@/hooks';

const useGetStyling = () => {
  const backgroundColor = useThemeColor('background');
  return {
    container: {
      flex: 1,
      backgroundColor: backgroundColor,
    },
  };
};

export default useGetStyling;
