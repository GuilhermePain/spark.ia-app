import { Button } from "@/components/Button";
import { ThemedView } from "@/components/ThemedView";
import { ScrollView, View } from "react-native";
import { Input } from "@/components/Input";
import { useState } from "react";
import { Message } from "@/components/Message";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

type Message = {
  sender: "spark" | string;
  content: string;
};

export default function Login() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  async function handlePrompt() {
    if (prompt) {
      const newUserMessage: Message = {
        sender: "Usuário",
        content: prompt,
      };
      setMessages([...messages, newUserMessage]);
      setPrompt("");

      fetch(
        `http://10.0.0.102:3001/api/perguntar/${encodeURIComponent(prompt)}`
      ).then(async (res) => {
        const data = await res.json();
        if (res.status === 200) {
          const newBotMessage: Message = {
            sender: "spark",
            content: data.replace(/\n\s*\n/g, ""),
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
        {messages.map((message, ind) => (
          <Message
            key={ind}
            sender={message.sender}
            content={message.content}
          />
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
