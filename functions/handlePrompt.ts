import { MessageProps } from "@/components/Message";
import sendPrompt from "@/api/sendPrompt";

export default async function handlePrompt(
  messages: MessageProps[],
  setMessages: Function,
  prompt: string,
  setPrompt: Function
) {
  const canSendMessages = messages ? !messages.at(-1)?.loading : true;

  if (!prompt || !canSendMessages) return;

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

  try {
    const botResponse = await sendPrompt(prompt);
    setMessages([...messages, newUserMessage, botResponse]);
  } catch (err: unknown) {
    console.error(err);
  }
}
