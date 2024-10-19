import Image from '../Image';
import View from '../View';
import TypewriterText from '../TypeWriterText';
import ThemedText from '../ThemedText';
import { useThemedMascot } from '@/hooks';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';
import { useEffect } from 'react';
import useGetStyling from './styles';

export default function Message(props: MessageProps) {
  const { styles, imageStyle, loadingStyle } = useGetStyling(props.sender);
  const size = useSharedValue(1);
  const animationConfig = {
    duration: 700,
    easing: Easing.inOut(Easing.ease),
  };
  const mascotImage = useThemedMascot(true);
  const userImage = require('../../assets/images/user-placeholder.jpg');
  const image = props.sender === 'spark' ? mascotImage : userImage;

  useEffect(() => {
    size.value = withRepeat(
      withSequence(
        withTiming(1, animationConfig),
        withTiming(1.5, animationConfig)
      ),
      -1,
      true
    );
  }, []);

  return (
    <View className={styles.container}>
      <View className={styles.textContainer}>
        <Image style={imageStyle} source={image} />
        <View className="ml-3">
          <ThemedText
            fontSize={20}
            className={styles.senderText}
            type="defaultSemiBold"
          >
            {props.sender}
          </ThemedText>
          <View style={{ minHeight: 24 }}>
            {props.loading && (
              <Animated.View
                style={loadingStyle}
                className="rounded-full my-auto"
              />
            )}
            {!props.loading && props.sender !== 'spark' && (
              <ThemedText
                className={styles.contentText}
                fontSize={18}
                type="default"
              >
                {props.content}
              </ThemedText>
            )}
            {!props.loading && props.sender === 'spark' && (
              <TypewriterText content={props.content} />
            )}
          </View>
        </View>
      </View>
    </View>
  );
}

export interface MessageProps {
  sender: 'spark' | string;
  content?: string;
  loading?: boolean;
}
