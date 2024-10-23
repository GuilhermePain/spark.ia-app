import HorizontalLine from '../HorizontalLine';
import View from '../View';
import ThemedText from '../ThemedText';
import Button from '../Button';
import Picker from '../Picker';
import { useEffect, useState } from 'react';
import { router } from '@/router';
import { parseQuestion } from '@/functions';
import { storeLanguage } from '@/store/language';

export default function Modal(props: ModalProps) {
  const { visible, setVisible, language, question, year } = props;
  const [selectedQuestion, setQuestion] = useState<null | 'string'>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<null | 'string'>(
    null
  );

  useEffect(() => {
    setSelectedLanguage((selectedLanguage ?? language) as any);
    setQuestion(
      selectedQuestion ??
        (`${parseInt(question) - 1}${language === 'inglês' ? '-ingles' : ''}` as any)
    );
  });

  return (
    <View
      onTouchStart={() => setVisible(false)}
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
      className="bg-black/60 w-full h-full absolute bottom-0 left-0 z-20 transition-all"
    >
      <View
        onTouchStart={(e) => e.stopPropagation()}
        className="bg-white dark:bg-slate-700 shadow-lg py-8 m-auto w-4/5 h-96 rounded-lg"
      >
        <View className="mx-auto w-4/5">
          <ThemedText type="title">Opções da prova</ThemedText>
          <HorizontalLine big />
          <ThemedText className="mb-1" type="label">
            Língua estrangeira
          </ThemedText>
          <Picker
            onValueChange={(val: any) => setSelectedLanguage(val)}
            selectedValue={selectedLanguage}
          >
            <Picker.Item label="Espanhol" value="espanhol" />
            <Picker.Item label="Inglês" value="inglês" />
          </Picker>
          <ThemedText className="mt-4 mb-1" type="label">
            Questão
          </ThemedText>
          <Picker
            onValueChange={(val: any) => setQuestion(val)}
            selectedValue={parseInt(selectedQuestion ?? '1')}
          >
            {Array.from({ length: 180 }).map((_, ind) => {
              return (
                <Picker.Item
                  key={ind}
                  label={(ind + 1).toString()}
                  value={ind}
                />
              );
            })}
          </Picker>
          <Button
            onPress={() => {
              storeLanguage(selectedLanguage as 'inglês' | 'espanhol');
              if (selectedQuestion !== null && selectedLanguage) {
                const q = parseQuestion(
                  selectedQuestion,
                  year,
                  selectedLanguage,
                  true
                );
                router.replace(`/questions/${year}/${q}`);
                setVisible(false);
              }
            }}
            className="mt-6 mx-auto"
            width={200}
            textSize={20}
            title="Aplicar"
          />
        </View>
      </View>
    </View>
  );
}

interface ModalProps {
  year: string;
  visible: boolean;
  setVisible: Function;
  language: string;
  question: string;
}
