import { useState } from 'react';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useThemedMascot } from '@/hooks';
import Message, { type MessageProps } from '@/components/Message';
import {
  View,
  ThemedView,
  ScrollView,
  Input,
  Button,
  ChatPlaceholder,
} from '@/components/';
import { handlePrompt } from '@/functions';

export default function Chat() {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const mascotImage = useThemedMascot(true);

  return (
    <ThemedView style={{ alignItems: 'center' }}>
      <ScrollView className="w-full">
        <View className="h-2 w-full" />
        {messages.length === 0 && <ChatPlaceholder mascotImage={mascotImage} />}
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
          onPress={() => handlePrompt(messages, setMessages, prompt, setPrompt)}
          icon={faArrowUp}
          className="w-10 h-10 aspect-square"
        />
      </View>
    </ThemedView>
  );
}
