import { Button } from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { View } from "react-native";
import { useState } from "react";
import TypeWriter from "react-native-typewriter";
import { HorizontalLine } from "@/components/HorizontalLine";
import { useThemeColor } from "@/hooks/useThemeColor";

export default function Flashcard() {
  const [answerVisible, setVisible] = useState(false);
  const textColor = useThemeColor("text");

  return (
    <ThemedView>
      <View className="w-10/12 mx-auto mt-10">
        <ThemedText type="title">
          Quais foram as principais causas da Revolução Francesa de 1789?
        </ThemedText>
        <HorizontalLine big />
        {answerVisible && (
          <TypeWriter
            typing={1}
            minDelay={0.2}
            maxDelay={0.2}
            className="mt-2 text-3xl"
            style={{
              fontFamily: "Nunito_Medium",
              fontSize: 18,
              flexWrap: "wrap",
              height: "auto",
              color: textColor,
            }}
          >
            As principais causas foram a desigualdade social e econômica, a
            crise financeira do Estado, a influência das ideias iluministas, e o
            descontentamento da população com a monarquia absolutista e os
            privilégios da nobreza e do clero.
          </TypeWriter>
        )}
      </View>
      {answerVisible && (
        <Button hollow width={275} className="mx-auto mt-auto" title="Errei" />
      )}
      <Button
        onPress={() => {
          setVisible(true);
        }}
        width={275}
        className={`${answerVisible ? "mt-4" : "mt-auto"} mx-auto mb-16`}
        title={answerVisible ? "Acertei" : "Mostrar"}
      />
    </ThemedView>
  );
}
