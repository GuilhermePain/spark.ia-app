import { router } from '@/router';
import TouchableOpacity from '../TouchableOpacity';
import Image, { ImageSourcePropType } from '../Image';
import HorizontalLine from '../HorizontalLine';
import Text from '../Text';

export default function PressableCard(props: PressableCardProps) {
  const { destination, imageSource, text } = props;

  return (
    <TouchableOpacity
      onPress={() => router.push(destination)}
      className="dark:bg-slate-700 bg-white rounded-2xl mx-auto mt-10 shadow-lg w-60 h-[16rem]"
    >
      <Image
        className="w-52 h-44 mx-auto"
        resizeMethod="scale"
        resizeMode="contain"
        source={imageSource}
      />
      <HorizontalLine big />
      <Text className="font-medium text-2xl mx-auto dark:text-white text-background-dark w-full text-center">
        {text}
      </Text>
    </TouchableOpacity>
  );
}

interface PressableCardProps {
  destination: string;
  imageSource: ImageSourcePropType;
  text: string;
}
