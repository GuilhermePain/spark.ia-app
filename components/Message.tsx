import { Image, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { useThemeMascot } from "@/hooks/useThemeMascot";
import { useThemeColor } from "@/hooks/useThemeColor";
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  withRepeat,
  withSequence,
} from "react-native-reanimated";
import { useEffect } from "react";
import { TypewriterText } from "./TypewriterText";

export type MessageProps = {
  sender: "spark" | string;
  content?: string;
  loading?: boolean;
};

export function Message(props: MessageProps) {
  const textColor = useThemeColor("text");
  const mascotImage = useThemeMascot(true);
  const userImage = require("../assets/images/user-placeholder.jpg");
  const size = useSharedValue(1);
  const animationConfig = {
    duration: 700,
    easing: Easing.inOut(Easing.ease),
  };
  let image;
  if (props.sender === "spark") image = mascotImage;
  else image = userImage;

  useEffect(() => {
    size.value = withRepeat(
      withSequence(
        withTiming(1, animationConfig),
        withTiming(1.5, animationConfig)
      ),
      -1,
      true
    );
  }, []);

  return (
    <View className="mx-auto text-left h-fit w-11/12 pr-10 mt-2">
      <View className="flex flex-row">
        <Image
          className={`${
            props.sender === "spark" ? "aspect-[7/10]" : "rounded-full"
          } w-8 h-8`}
          source={image}
        />
        <View className="ml-3">
          <ThemedText
            fontSize={20}
            className="capitalize my-auto"
            type="defaultSemiBold"
          >
            {props.sender}
          </ThemedText>
          <View style={{ minHeight: 24 }}>
            {props.loading && (
              <Animated.View
                className="rounded-full my-auto"
                style={[
                  {
                    width: 12,
                    height: 12,
                    transform: [{ scale: size }],
                    backgroundColor: textColor,
                  },
                ]}
              />
            )}
            {!props.loading && props.sender !== "spark" && (
              <ThemedText
                className="break-all h-fit"
                fontSize={18}
                type="default"
              >
                {props.content}
              </ThemedText>
            )}
            {!props.loading && props.sender === "spark" && (
              <TypewriterText content={props.content} />
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
