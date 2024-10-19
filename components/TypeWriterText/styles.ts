import { useThemeColor } from '@/hooks/useThemeColor';

const useGetStyling = () => {
  return {
    typewriter: {
      fontFamily: 'Medium',
      fontSize: 18,
      flexWrap: 'wrap',
      height: 'auto',
      color: useThemeColor('text'),
    },
  };
};

export default useGetStyling;
