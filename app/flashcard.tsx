import {
  SubjectCard,
  ThemedView,
  ThemedText,
  View,
  ScrollView,
} from '@/components';

import {
  faBrain,
  faCalculator,
  faDna,
  faFlask,
  faGlobe,
  faHourglass,
  faLightbulb,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

export default function Flashcard() {
  return (
    <ThemedView>
      <ScrollView
        contentContainerStyle={{
          borderRadius: 10,
          paddingBottom: 20,
          overflow: 'hidden',
        }}
        className="mx-auto w-full h-full"
      >
        <View className="w-10/12 mx-auto">
          <ThemedText className="mt-10" type="title">
            Escolha uma disciplina
          </ThemedText>
          <View className="flex flex-row">
            <View className="w-1/2">
              <SubjectCard subject="math" icon={faCalculator} />
              <SubjectCard subject="biology" icon={faDna} />
              <SubjectCard subject="chemistry" icon={faFlask} />
              <SubjectCard subject="physics" icon={faLightbulb} />
            </View>
            <View className="w-1/2">
              <SubjectCard subject="history" icon={faHourglass} />
              <SubjectCard subject="geography" icon={faGlobe} />
              <SubjectCard subject="philosophy" icon={faBrain} />
              <SubjectCard subject="sociology" icon={faUsers} />
            </View>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
