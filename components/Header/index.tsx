import { Image, View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { router } from '@/router';
import useGetStyling from '../PressableCard/styles';
import { useThemedMascot } from '@/hooks';
import { routeNames } from '@/router';
import Picker from '../Picker';

export default function Header(props: HeaderProps) {
  const {
    backButtonColor,
    backButtonShown,
    imageClassName,
    textStyle,
    textClassName,
    viewClassName,
    touchableOpacityClassName,
  } = useGetStyling();

  return (
    <View className={viewClassName}>
      {backButtonShown && (
        <TouchableOpacity
          onPress={() => router.back()}
          className={touchableOpacityClassName}
        >
          <FontAwesomeIcon
            style={{ marginVertical: 'auto' }}
            color={backButtonColor}
            size={25}
            icon={faArrowLeft}
          />
        </TouchableOpacity>
      )}
      <Image className={imageClassName} source={useThemedMascot()} />
      <Text className={textClassName} style={textStyle}>
        {Object.keys(routeNames).includes(props.children)
          ? routeNames[props.children]
          : props.children}
      </Text>
    </View>
  );
}

export interface HeaderProps {
  children: string;
  tintColor?: string;
}
