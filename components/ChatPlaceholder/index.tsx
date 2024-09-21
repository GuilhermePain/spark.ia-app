import View from "../View";
import Image, { ImageSourcePropType } from "../Image";
import ThemedText from "../ThemedText";

export default function ChatPlaceholder(props: ChatPlaceholderProps) {
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

export interface ChatPlaceholderProps {
  mascotImage: ImageSourcePropType;
}
