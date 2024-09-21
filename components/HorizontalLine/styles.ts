import { HorizontalLineProps } from ".";

const useGetStyling = (props: HorizontalLineProps) => {
  const containerClassName = `h-1 ${
    props.big ? "w-full" : "w-1/2"
  } my-3 bg-primary rounded-md`;

  return { containerClassName };
};

export default useGetStyling;