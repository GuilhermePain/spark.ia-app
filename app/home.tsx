import { ThemedView } from "@/components";
import { router } from "@/router";
import { Image, Text, TouchableOpacity } from "@/components";

export default function Home() {
  return (
    <ThemedView>
      <TouchableOpacity
        onPress={() => router.push("/chat")}
        className="dark:bg-slate-700 bg-white rounded-2xl mx-auto mt-10 shadow-lg w-60 h-[16rem]"
      >
        <Image
          className="w-52 h-44 mx-auto"
          resizeMethod="scale"
          resizeMode="contain"
          source={require("../assets/images/chatbot-chooser.png")}
        />
        <Text className="font-medium text-2xl mx-auto dark:text-white text-background-dark mt-2 pt-3 border-t dark:border-orange-200/40 border-orange-200 w-full text-center">
          Chatbot
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/flashcard-list")}
        className="dark:bg-slate-700 bg-white rounded-2xl mx-auto mt-10 shadow-lg w-60 h-[16rem]"
      >
        <Image
          className="w-52 h-44 mx-auto"
          resizeMethod="scale"
          resizeMode="contain"
          source={require("../assets/images/flashcard-chooser.png")}
        />
        <Text className="font-medium text-2xl mx-auto dark:text-white text-background-dark mt-2 pt-3 border-t dark:border-orange-200/40 border-orange-200 w-full text-center">
          Flashcards
        </Text>
      </TouchableOpacity>
    </ThemedView>
  );
}
