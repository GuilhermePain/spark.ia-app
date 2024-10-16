import { useState } from 'react';
import { useThemeColor } from '@/hooks/useThemeColor';
import { router } from '@/router';
import { useThemeMascot } from '@/hooks/useThemeMascot';
import {
  Button,
  HorizontalLine,
  ThemedText,
  ThemedView,
  Input,
  Text,
  Image,
  View,
  Checkbox,
} from '@/components';
import handleLogin from '@/functions/handleLogin';

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShown, setPasswordVisible] = useState(false);

  const themeMascot = useThemeMascot(true);
  const textSecondaryColor = useThemeColor('text-secondary');
  const primaryColor = useThemeColor('primary');

  return (
    <ThemedView style={{ alignItems: 'center' }}>
      <Image
        className="w-32 h-32 mt-20 aspect-[7/10] my-2"
        source={themeMascot}
      />
      <ThemedText type="title" className="scale-125 mt-10 font-bold">
        Login
      </ThemedText>
      <HorizontalLine />
      <ThemedText type="label" className="text-left w-4/5 mb-1 mt-2">
        Email
      </ThemedText>
      <Input value={email} setValue={setEmail} className="w-4/5" />
      <ThemedText type="label" className="text-left w-4/5 mb-1 mt-2">
        Senha
      </ThemedText>
      <Input
        secure={!passwordShown}
        value={password}
        setValue={setPassword}
        className="w-4/5"
      />
      <View className="w-4/5 flex flex-row my-3">
        <Checkbox
          onPress={(pressed) => {
            setPasswordVisible(pressed);
          }}
          fillColor={primaryColor}
        />
        <Text
          style={{ color: textSecondaryColor }}
          className="font-medium text-xl my-auto -ml-2"
        >
          Mostrar senha
        </Text>
      </View>
      <Button
        onPress={() => handleLogin(email, password, setError)}
        width={200}
        className="mt-2"
        title="Entrar"
      />

      {error && (
        <Text className="text-2xl font-semibold text-red-600 mt-3">
          {error}
        </Text>
      )}
      <ThemedText type="label" className="mt-2">
        Não tem uma conta?{' '}
        <ThemedText onPress={() => router.navigate('/signup')} type="link">
          Registre-se
        </ThemedText>
        !
      </ThemedText>
    </ThemedView>
  );
}
