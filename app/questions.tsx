import { fetchExams } from '@/api/enem';
import { exams as default_exams } from '@/constants';
import {
  Button,
  ScrollView,
  ThemedText,
  ThemedView,
  View,
  Loading,
  HorizontalLine,
} from '@/components';
import { getAvailableExams } from '@/store/exam';
import { Href, router } from 'expo-router';
import { useEffect, useState } from 'react';

export default function Questions() {
  const [loading, setLoading] = useState(true);
  const [exams, setExams] = useState<string[]>(default_exams);
  const [noInternet, setNoInternet] = useState(false);
  const [availableExams, setAvailableExams] = useState<string[]>([]);

  useEffect(() => {
    fetchExams()
      .then((e) => {
        setExams(e);
        setLoading(false);
      })
      .catch(async () => {
        setNoInternet(true);
        setAvailableExams(await getAvailableExams());
        setLoading(false);
      });
  }, []);

  return (
    <ThemedView>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
          <View className="w-10/12 mx-auto">
            <ThemedText
              type="title"
              style={{ fontSize: 32, marginTop: 10, lineHeight: 48 }}
            >
              Escolha uma aplicação do ENEM
            </ThemedText>
            <HorizontalLine big />
          </View>
          {exams?.map((exam, ind) => {
            return (
              <View
                key={ind}
                className="dark:bg-slate-700 bg-white w-10/12 mx-auto h-28 shadow-md shadow-gray-700 rounded-2xl mt-4 flex-row justify-around "
              >
                <ThemedText
                  style={{ lineHeight: 40 }}
                  type="title"
                  className="my-auto ml-4"
                >
                  {exam}
                </ThemedText>
                <Button
                  disabled={noInternet && !availableExams.includes(exam)}
                  onPress={() =>
                    router.navigate(('/questions/' + exam + '/1') as Href)
                  }
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
