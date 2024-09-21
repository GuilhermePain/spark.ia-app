import { useThemeColor } from "@/hooks/useThemeColor";

const backgroundColor = useThemeColor("background");

const useGetStyling = () => {
  return {
    container: {
      flex: 1,
      backgroundColor: backgroundColor,
    },
  };
};

export default useGetStyling;
