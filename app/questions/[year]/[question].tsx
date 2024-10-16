import fetchQuestion from '@/api/enem/fetchQuestion';
import { useEffect, useState } from 'react';
import {
  HorizontalLine,
  ScrollView,
  ThemedText,
  ThemedView,
  View,
} from '@/components';
import { useLocalSearchParams } from 'expo-router';

export default function Question() {
  const params = useLocalSearchParams();

  const year = params.year as string;
  const question = params.question as string;

  const [questionData, setQuestionData] = useState<Question>();

  useEffect(() => {
    if (year && question) {
      fetchQuestion(year, question).then((data) => {
        setQuestionData(data);
      });
    }
  }, []);

  return (
    <ThemedView className="px-4">
      <ScrollView>
        {questionData && (
          <>
            <ThemedText type="title" className="mt-12">
              {question}ª questão do ENEM {year}
            </ThemedText>
            <ThemedText fontSize={18} type="default" className="mt-4">
              {questionData.content}
            </ThemedText>
            <HorizontalLine big />
            <ThemedText type="subtitle" fontSize={20} className="mt-4">
              {questionData.command}
            </ThemedText>
            {questionData.alternatives.map((alt, ind) => {
              return (
                <ThemedText type="label" fontSize={18}>
                  {'ABCDE'[ind]}) {alt}
                </ThemedText>
              );
            })}
            <HorizontalLine big />
            <ThemedText type="subtitle" fontSize={20}>
              Resposta
            </ThemedText>
            <ThemedText type="label" fontSize={20}>
              Item {questionData.answer}
            </ThemedText>
            <View className="h-10" />
          </>
        )}
      </ScrollView>
    </ThemedView>
  );
}

interface Question {
  content: string;
  image: string;
  command: string;
  alternatives: string[];
  subjects: string[];
  answer: string;
  comment: string;
}
