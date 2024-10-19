import { Image as ImageBase } from 'react-native';
import { ImageProps as ImageBaseProps } from 'react-native';

export default function Image(props: ImageProps) {
  return <ImageBase {...props} />;
}

const getSize = ImageBase.getSize;
export { getSize };

export interface ImageProps extends ImageBaseProps {}
export type ImageSourcePropType = ImageProps['source'];
