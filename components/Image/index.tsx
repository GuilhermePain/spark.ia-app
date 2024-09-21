import { Image as ImageBase } from "react-native";
import { ImageProps as ImageBaseProps } from "react-native";

export default function Image(props: ImageProps) {
  return <ImageBase {...props} />;
}

export interface ImageProps extends ImageBaseProps {}
export type ImageSourcePropType = ImageProps["source"];
