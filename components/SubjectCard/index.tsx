import Pressable from '../Pressable';
import View from '../View';
import Text from '../Text';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  FontAwesomeIcon,
  FontAwesomeIconStyle,
} from '@fortawesome/react-native-fontawesome';
import { router } from '@/router';
import { subjectTranslations } from '@/constants/SubjectNames';
import useGetStyling from './styles';

export default function SubjectCard(props: SubjectCardProps) {
  const displaySubject = subjectTranslations[props.subject];
  const { styles } = useGetStyling();

  return (
    <View className={styles.cardContainer}>
      <Pressable
        onPress={() => router.push(`/flashcard/${props.subject}/0`)}
        android_ripple={styles.androidRipple}
        className={styles.pressable}
      >
        <View className={styles.contentContainer}>
          <FontAwesomeIcon
            color="white"
            style={styles.icon as FontAwesomeIconStyle}
            icon={props.icon}
          />
          <Text className={styles.subjectText}>{displaySubject}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export interface SubjectCardProps {
  subject: string;
  icon: IconDefinition;
}
