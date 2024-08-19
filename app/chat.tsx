import { Button } from "@/components/Button";
import { ThemedView } from "@/components/ThemedView";
import { Image, ImageSourcePropType, ScrollView, View } from "react-native";
import { Input } from "@/components/Input";
import { useState } from "react";
import { Message, type MessageProps } from "@/components/Message";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useThemeMascot } from "@/hooks/useThemeMascot";
import { ThemedText } from "@/components/ThemedText";

function Placeholder(props: { mascotImage: ImageSourcePropType }) {
  return (
    <View>
      <Image
        className="mx-auto w-32 h-[10rem] mt-10 aspect-[7/10]"
        source={props.mascotImage}
      />
      <ThemedText centered type="subtitle" className="mx-auto mt-4">
        Em que posso lhe ajudar?
      </ThemedText>
    </View>
  );
}

export default function Chat() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<MessageProps[]>([]);

  const mascotImage = useThemeMascot(true);

  async function handlePrompt() {
    if (prompt && (messages ? !messages.at(-1)?.loading : true)) {
      const newUserMessage: MessageProps = {
        sender: "Usuário",
        content: prompt,
      };
      const loadingMessage: MessageProps = {
        sender: "spark",
        loading: true,
      };
      setMessages([...messages, newUserMessage, loadingMessage]);
      setPrompt("");

      fetch(
        `${process.env.EXPO_PUBLIC_API_URL}/api/perguntar/${encodeURIComponent(
          prompt
        )}`,
        { method: "POST" }
      ).then(async (res) => {
        console.log(res);
        const data = await res.json();
        if (res.status === 200) {
          const cleanData = data
            .replace(/\n\s*\n/g, "\n")
            .replace(/\n$/, "")
            .replace(/\*/g, "");
          const newBotMessage: MessageProps = {
            sender: "spark",
            content: cleanData,
          };
          setMessages([...messages, newUserMessage, newBotMessage]);
        } else {
          console.error(data.message);
        }
      });
    }
  }

  return (
    <ThemedView style={{ alignItems: "center" }}>
      <ScrollView className="w-full">
        <View className="h-2 w-full" />
        {messages.length === 0 && <Placeholder mascotImage={mascotImage} />}
        {messages.length > 0 &&
          messages.map((messageProps, ind) => (
            <Message key={ind} {...messageProps} />
          ))}
        <View className="h-20 w-full" />
      </ScrollView>
      <View className="absolute bottom-5 flex flex-row w-[90%] justify-around">
        <Input
          border
          value={prompt}
          setValue={setPrompt}
          placeholder="Insira um texto ou URL de um site"
          className="w-[85%]"
        />
        <Button
          onPress={() => handlePrompt()}
          icon={faArrowUp}
          className="w-10 h-10 aspect-square"
        />
      </View>
    </ThemedView>
  );
}
