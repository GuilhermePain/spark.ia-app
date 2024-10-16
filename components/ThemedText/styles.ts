const useGetStyling = () => {
  return {
    default: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'Medium',
    },
    defaultSemiBold: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'Semibold',
    },
    title: {
      fontSize: 30,
      lineHeight: 32,
      fontFamily: 'Bold',
    },
    subtitle: {
      fontSize: 20,
      fontFamily: 'Bold',
    },
    label: {
      fontSize: 20,
      lineHeight: 28,
      fontFamily: 'Semibold',
    },
    link: {
      lineHeight: 30,
      fontSize: 20,
      fontFamily: 'Bold',
      color: '#FA7807',
    },
  };
};

export default useGetStyling;
