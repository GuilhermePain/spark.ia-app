const useGetStyling = () => {
  return {
    default: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "Nunito_Medium",
    },
    defaultSemiBold: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: "Nunito_Semibold",
    },
    title: {
      fontSize: 30,
      lineHeight: 32,
      fontFamily: "Nunito_Bold",
    },
    subtitle: {
      fontSize: 20,
      fontFamily: "Nunito_Bold",
    },
    label: {
      fontSize: 20,
      lineHeight: 28,
      fontFamily: "Nunito_Semibold",
    },
    link: {
      lineHeight: 30,
      fontSize: 20,
      fontFamily: "Nunito_Bold",
      color: "#FA7807",
    },
  };
};

export default useGetStyling;