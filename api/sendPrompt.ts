import { MessageProps } from "@/components/Message";

const apiEndpoint = `${process.env.EXPO_PUBLIC_API_URL}/api/perguntar`;

const sanitizeData = (data: string) => {
  return data
    .replace(/\n\s*\n/g, "\n")
    .replace(/\n$/, "")
    .replace(/\*/g, "");
};

export default async function sendPrompt(message: string) {
  const encodedMessage = encodeURIComponent(message);

  const response = await fetch(`${apiEndpoint}/${encodedMessage}`, {
    method: "POST",
  });

  const data = await response.json();

  if (response.status === 200) {
    const cleanData = sanitizeData(data);

    const botResponse: MessageProps = {
      sender: "spark",
      content: cleanData,
    };

    return botResponse;
  } else {
    throw new Error(data.message);
  }
}
