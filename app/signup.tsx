import { useState } from 'react';
import { useThemeColor, useThemedMascot } from '@/hooks';
import { router } from '@/router';
import {
  ThemedView,
  ThemedText,
  Image,
  HorizontalLine,
  Input,
  View,
  Text,
  Button,
  Checkbox,
} from '@/components';
import { handleSignup } from '@/functions';

export default function SignUp() {
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordShown, setPasswordVisible] = useState(false);

  function resetForm() {
    setName('');
    setEmail('');
    setConfirmPassword('');
    setPassword('');
  }

  return (
    <ThemedView style={{ alignItems: 'center' }}>
      <Image
        className="w-32 h-32 mt-10 aspect-[7/10] my-2"
        source={useThemedMascot(true)}
      />
      <ThemedText type="title" className="scale-125 mt-10 font-bold">
        Registro
      </ThemedText>
      <HorizontalLine />
      <ThemedText type="label" className="text-left w-4/5 mb-1 mt-2">
        Nome
      </ThemedText>
      <Input value={name} setValue={setName} className="w-4/5" />
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
      <ThemedText type="label" className="text-left w-4/5 mb-1 mt-2">
        Confirmar senha
      </ThemedText>
      <Input
        secure={!passwordShown}
        value={confirmPassword}
        setValue={setConfirmPassword}
        className="w-4/5"
      />
      <View className="w-4/5 flex flex-row my-3">
        <Checkbox
          onPress={(pressed) => {
            setPasswordVisible(pressed);
          }}
          fillColor={useThemeColor('primary')}
        />
        <Text
          style={{ color: useThemeColor('text-secondary') }}
          className="font-medium text-xl my-auto -ml-2"
        >
          Mostrar senha
        </Text>
      </View>
      <Button
        onPress={() =>
          handleSignup(
            email,
            password,
            confirmPassword,
            name,
            setError,
            resetForm
          )
        }
        width={200}
        className="mt-2"
        title="Registrar"
      />

      {error && (
        <Text className="text-2xl font-semibold text-red-600 mt-3">
          {error}
        </Text>
      )}
      <ThemedText type="label" className="mt-2">
        Já está registrado? Faça{' '}
        <ThemedText onPress={() => router.navigate('/login')} type="link">
          login
        </ThemedText>
        !
      </ThemedText>
    </ThemedView>
  );
}
