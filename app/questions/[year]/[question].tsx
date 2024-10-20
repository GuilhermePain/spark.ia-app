import { Question as QuestionType } from '@/types';
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
import {
  faArrowLeft,
  faArrowRight,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { getSize } from '@/components/Image';
import { ImageSize } from '@/types';
import checkUnrenderedImages from './checkUnrenderedImages';
import changeQuestions from './changeQuestions';
import loadQuestion from './loadQuestion';
import checkArrowsAvailability from './checkArrowsAvailability';

export default function Question() {
  const params = useLocalSearchParams();

  const year = params.year as string;
  const question = params.question as string;

  const [loading, setLoading] = useState(true);
  const [questionData, setQuestionData] = useState<QuestionType>();
  const [imageSizes, setImageSizes] = useState<ImageSize[]>([]);
  const [contentImageAspectRatio, setContentImageAspectRatio] = useState<
    null | number
  >();
  const [imageLoadFailed, setImageLoadFailed] = useState(false);
  const windowWidth = Dimensions.get('window').width;
  const [answerVisible, setAnswerVisible] = useState(false);

  const processQuestionData = (data: QuestionType) => {
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
  };

  useEffect(() => {
    loadQuestion(processQuestionData, year, question);
  }, []);

  const { leftArrowEnabled, rightArrowEnabled } =
    checkArrowsAvailability(question);
  const previousQuestion = () => changeQuestions(-1, question, year);
  const nextQuestion = () => changeQuestions(1, question, year);
  const hasUnrenderedImages = checkUnrenderedImages(imageSizes, questionData);

  return (
    <ThemedView>
      {loading || (hasUnrenderedImages && !imageLoadFailed) ? (
        <Loading />
      ) : (
        <>
          <View className="absolute right-4 bottom-4 flex flex-row gap-2 z-10">
            <Button
              disabled={!leftArrowEnabled}
              onPress={() => previousQuestion()}
              width={50}
              height={50}
              round
              icon={faArrowLeft}
              iconSize={25}
            />
            <Button
              disabled={!rightArrowEnabled}
              onPress={() => nextQuestion()}
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
                <ThemedText lineHeight={25} type="label" fontSize={20}>
                  Item{' '}
                  {answerVisible ? (
                    questionData.answer
                  ) : (
                    <ThemedText
                      lineHeight={25}
                      fontSize={20}
                      type="link"
                      onPress={() => setAnswerVisible(true)}
                    >
                      (Exibir)
                    </ThemedText>
                  )}
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
