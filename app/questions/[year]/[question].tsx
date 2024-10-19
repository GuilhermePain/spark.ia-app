import fetchQuestion from '@/api/enem/fetchQuestion';
import { Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import {
  Button,
  HorizontalLine,
  Image,
  Loading,
  ScrollView,
  ThemedText,
  ThemedView,
  View,
} from '@/components';
import { useLocalSearchParams } from 'expo-router';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { router } from '@/router';
import { getSize } from '@/components/Image';

export default function Question() {
  const params = useLocalSearchParams();

  const year = params.year as string;
  const question = params.question as string;

  const [loading, setLoading] = useState(true);
  const [questionData, setQuestionData] = useState<Question>();
  const [imageSizes, setImageSizes] = useState<
    {
      width: number;
      height: number;
    }[]
  >([]);
  const [contentImageAspectRatio, setContentImageAspectRatio] = useState<
    null | number
  >();
  const [imageLoadFailed, setImageLoadFailed] = useState(false);
  const windowWidth = Dimensions.get('window').width;
  const [answerVisible, setAnswerVisible] = useState(false);

  useEffect(() => {
    if (year && question) {
      fetchQuestion(year, question)
        .then((data: Question) => {
          if (data.alternatives[0].includes('https://')) {
            setImageSizes([]);
            data.alternatives.map((alt: string) => {
              getSize(
                alt,
                (width, height) => {
                  setImageSizes((prevSizes) => [
                    ...prevSizes,
                    { width: width, height: height },
                  ]);
                },
                () => setImageLoadFailed(true)
              );
            });
          }

          if (data.image) {
            getSize(
              data.image,
              (width, height) => {
                setContentImageAspectRatio(height / width);
              },
              () => setImageLoadFailed(true)
            );
          }

          setLoading(false);
          setQuestionData(data);
        })
        .catch(() => {
          throw 'Erro ao pegar dados';
        });
    }
  }, []);

  const changeQuestions = (change: number) => {
    const targetQuestion = parseInt(question) + change;
    if (targetQuestion > 0 && targetQuestion <= 180)
      router.replace(`/questions/${year}/${targetQuestion}`);
  };

  let imageAlternatives;
  let hasUnrenderedImages = false;
  if (questionData) {
    imageAlternatives = questionData.alternatives[0].includes('https://');
    if (imageAlternatives)
      hasUnrenderedImages =
        imageSizes.length !== questionData.alternatives.length;
  }

  return (
    <ThemedView>
      {loading || (hasUnrenderedImages && !imageLoadFailed) ? (
        <Loading />
      ) : (
        <>
          <View className="absolute right-4 bottom-4 flex flex-row gap-2 z-10">
            <Button
              onPress={() => changeQuestions(-1)}
              width={50}
              height={50}
              round
              icon={faArrowLeft}
              iconSize={25}
            />
            <Button
              onPress={() => changeQuestions(1)}
              width={50}
              height={50}
              round
              icon={faArrowRight}
              iconSize={25}
            />
          </View>
          <ScrollView className="px-6">
            {questionData && (
              <>
                <ThemedText type="title" className="mt-8">
                  {question}ª questão do ENEM {year} (Caderno azul)
                </ThemedText>
                <HorizontalLine big />
                {questionData.content && (
                  <ThemedText fontSize={18} type="default" className="mt-4">
                    {questionData.content}
                  </ThemedText>
                )}
                {contentImageAspectRatio && (
                  <Image
                    className="mx-auto mt-4"
                    style={{
                      width: windowWidth * 0.8,
                      height: windowWidth * 0.8 * contentImageAspectRatio,
                    }}
                    source={{ uri: questionData.image }}
                    resizeMode="contain"
                  />
                )}
                <ThemedText type="subtitle" fontSize={20} className="mt-4">
                  {questionData.command}
                </ThemedText>
                {questionData.alternatives.map((alt, ind) => {
                  if (alt.includes('https://')) {
                    if (!imageSizes[ind]) return;
                    return (
                      <View
                        key={ind}
                        style={{ height: imageSizes[ind].height + 10 }}
                        className="flex flex-row mt-2"
                      >
                        <ThemedText className="my-auto" type="label">
                          {'ABCDE'[ind]}){' '}
                        </ThemedText>
                        <Image
                          className="my-auto"
                          style={{
                            width: imageSizes[ind].width,
                            height: imageSizes[ind].height,
                          }}
                          src={alt}
                          source={{
                            uri: alt,
                          }}
                          resizeMode="cover"
                        />
                      </View>
                    );
                  }
                  return (
                    <ThemedText key={ind} type="label" fontSize={18}>
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
        </>
      )}
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
