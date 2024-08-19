import { SubjectCard } from "@/components/SubjectCard";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  faBook,
  faBrain,
  faCalculator,
  faDna,
  faFlask,
  faGlobe,
  faHourglass,
  faLightbulb,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { View, ScrollView } from "react-native";

export default function FlashcardList() {
  return (
    <ThemedView>
      <ScrollView
        contentContainerStyle={{
          borderRadius: 10,
          paddingBottom: 20,
          overflow: "hidden",
        }}
        className="mx-auto w-full h-full"
      >
        <View className="w-10/12 mx-auto">
          <ThemedText className="mt-10" type="title">
            Escolha uma disciplina
          </ThemedText>
          <View className="flex flex-row">
            <View className="w-1/2">
              <SubjectCard icon={faCalculator} subject="Matemática" />
              <SubjectCard icon={faDna} subject="Biologia" />
              <SubjectCard icon={faFlask} subject="Química" />
              <SubjectCard icon={faLightbulb} subject="Física" />
            </View>
            <View className="w-1/2">
              <SubjectCard icon={faHourglass} subject="História" />
              <SubjectCard icon={faGlobe} subject="Geografia" />
              <SubjectCard icon={faBrain} subject="Filosofia" />
              <SubjectCard icon={faUsers} subject="Sociologia" />
            </View>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
