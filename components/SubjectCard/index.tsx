import Pressable from '../Pressable';
import View from '../View';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  FontAwesomeIcon,
  FontAwesomeIconStyle,
} from '@fortawesome/react-native-fontawesome';
import { router } from '@/router';
import { subject_translations } from '@/constants';
import useGetStyling from './styles';
import ThemedText from '../ThemedText';

export default function SubjectCard(props: SubjectCardProps) {
  const displaySubject = subject_translations[props.subject];
  const { styles } = useGetStyling();

  return (
    <View>
      <View className={styles.cardContainer}>
        <Pressable
          onPress={() => router.push(`/flashcard/${props.subject}/0`)}
          android_ripple={styles.androidRipple}
          className={styles.pressable}
        >
          <View className={styles.contentContainer}>
            <FontAwesomeIcon
              size={50}
              color="white"
              style={styles.icon as FontAwesomeIconStyle}
              icon={props.icon}
            />
          </View>
        </Pressable>
      </View>
      <ThemedText
        type="defaultSemiBold"
        styleWithClassName
        className={styles.subjectText}
      >
        {displaySubject}
      </ThemedText>
    </View>
  );
}

export interface SubjectCardProps {
  subject: string;
  icon: IconDefinition;
}
