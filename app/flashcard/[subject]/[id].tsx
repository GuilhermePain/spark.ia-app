import { useState } from 'react';
import {
  HorizontalLine,
  ThemedView,
  View,
  ThemedText,
  Button,
  TypeWriter,
} from '@/components';
import { useThemeColor } from '@/hooks';
import { Href, router, useLocalSearchParams, useNavigation } from '@/router';
import { subject_translations, flashcards } from '@/constants';
import { Subject } from '@/types';
import { getTypewriterStyle } from './styles';

export default function Flashcard() {
  const [answerVisible, setVisible] = useState(false);
  const params = useLocalSearchParams();
  const navigation = useNavigation();
  const subject = params.subject as Subject;
  const id = parseInt(params.id as string);
  const textColor = useThemeColor('text');
  const TypewriterStyle = getTypewriterStyle(textColor);
  const subjectFlashcards = flashcards[subject] as {
    title: string;
    content: string;
  }[];

  if (subject) {
    navigation.setOptions({ title: subject_translations[subject.toString()] });
  }

  const goToNext = () => {
    if (id >= subjectFlashcards.length - 1) router.back();
    else router.replace(`/flashcard/${subject}/${id + 1}` as Href);
  };

  return (
    <ThemedView>
      <View className="w-10/12 mx-auto mt-10">
        <ThemedText type="title">
          {subjectFlashcards &&
            id !== undefined &&
            subjectFlashcards[id]?.title}
        </ThemedText>
        <HorizontalLine big />
        {answerVisible && (
          <TypeWriter
            typing={1}
            minDelay={0.2}
            maxDelay={0.2}
            className="mt-2 text-3xl"
            style={TypewriterStyle}
          >
            {subjectFlashcards &&
              id !== undefined &&
              subjectFlashcards[id]?.content}
          </TypeWriter>
        )}
      </View>
      {answerVisible && (
        <Button
          onPress={() => goToNext()}
          hollow
          width={275}
          className="mx-auto mt-auto"
          title="Errei"
        />
      )}
      <Button
        onPress={() => {
          if (!answerVisible) setVisible(true);
          else goToNext();
        }}
        width={275}
        className={`${answerVisible ? 'mt-4' : 'mt-auto'} mx-auto mb-16`}
        title={answerVisible ? 'Acertei' : 'Mostrar'}
      />
    </ThemedView>
  );
}
