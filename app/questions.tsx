import fetchExams from '@/api/enem/fetchExams';
import {
  Button,
  ScrollView,
  ThemedText,
  ThemedView,
  View,
  Loading,
} from '@/components';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';

export default function Questions() {
  const [loading, setLoading] = useState(true);
  const [exams, setExams] = useState<string[]>();

  useEffect(() => {
    fetchExams().then((e) => {
      setExams(e);
      setLoading(false);
    });
  }, []);

  return (
    <ThemedView>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
          <ThemedText
            type="title"
            className="w-10/12 mx-auto"
            style={{ fontSize: 36, marginTop: 10, lineHeight: 48 }}
          >
            Escolha uma aplicação do ENEM
          </ThemedText>
          {exams?.map((e, ind) => {
            return (
              <View
                key={ind}
                className="border-2 dark:border-gray-600 border-gray-300 w-10/12 mx-auto h-32 rounded-2xl mt-4 flex-row justify-around "
              >
                <ThemedText
                  style={{ lineHeight: 40 }}
                  type="title"
                  className="my-auto ml-4"
                >
                  {e}
                </ThemedText>
                <Button
                  onPress={() => router.navigate('/questions/' + e + '/1')}
                  textSize={22}
                  className="my-auto"
                  title="Ver questões"
                />
              </View>
            );
          })}
          <View className="h-10" />
        </ScrollView>
      )}
    </ThemedView>
  );
}
