import { HorizontalLine, ScrollView, ThemedView, View } from '@/components';
import { router } from '@/router';
import { Image, Text, TouchableOpacity } from '@/components';

export default function Home() {
  return (
    <ThemedView>
      <ScrollView>
        <TouchableOpacity
          onPress={() => router.push('/chat')}
          className="dark:bg-slate-700 bg-white rounded-2xl mx-auto mt-10 shadow-lg w-60 h-[16rem]"
        >
          <Image
            className="w-52 h-44 mx-auto"
            resizeMethod="scale"
            resizeMode="contain"
            source={require('../assets/images/chatbot-chooser.png')}
          />
          <HorizontalLine big />
          <Text className="font-medium text-2xl mx-auto dark:text-white text-background-dark w-full text-center">
            Chatbot
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push('/flashcard-list')}
          className="dark:bg-slate-700 bg-white rounded-2xl mx-auto mt-10 shadow-lg w-60 h-[16rem]"
        >
          <Image
            className="w-52 h-44 mx-auto"
            resizeMethod="scale"
            resizeMode="contain"
            source={require('../assets/images/flashcard-chooser.png')}
          />
          <HorizontalLine big />
          <Text className="font-medium text-2xl mx-auto dark:text-white text-background-dark w-full text-center">
            Flashcards
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push('/questions')}
          className="dark:bg-slate-700 bg-white rounded-2xl mx-auto mt-10 shadow-lg w-60 h-[16rem]"
        >
          <Image
            className="w-52 h-44 mx-auto"
            resizeMethod="scale"
            resizeMode="cover"
            source={require('../assets/images/survey.png')}
          />
          <HorizontalLine big />
          <Text className="font-medium text-2xl mx-auto dark:text-white text-background-dark w-full text-center">
            Questões
          </Text>
        </TouchableOpacity>
        <View className="h-10" />
      </ScrollView>
    </ThemedView>
  );
}
