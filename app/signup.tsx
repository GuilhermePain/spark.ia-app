import { Button } from "@/components/Button";
import { ThemedView } from "@/components/ThemedView";
import { Image, Text, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Input } from "@/components/Input";
import { useState } from "react";
import { HorizontalLine } from "@/components/HorizontalLine";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useThemeColor } from "@/hooks/useThemeColor";
import { router } from "expo-router";
import { useThemeMascot } from "@/hooks/useThemeMascot";

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordShown, setPasswordVisible] = useState(false);

  function resetForm() {
    setName("");
    setEmail("");
    setConfirmPassword("");
    setPassword("");
  }
  async function handleSignUp() {
    if (email && password && confirmPassword && name) {
      if (password !== confirmPassword) {
        return setError("Suas senhas não estão iguais!");
      }

      if (password.length < 8) {
        return setError("Sua senha deve conter pelo menos 8 caracteres!");
      }

      fetch(`${process.env.EXPO_PUBLIC_API_URL}/api/novousuario`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: name,
          email: email,
          senha: password,
          confirmarsenha: password,
          mobile: true,
        }),
      }).then(async (res) => {
        const data = await res.json();
        if (res.status === 200) {
          resetForm();
          setError("");
          router.navigate("/login");
        } else {
          setError(data.message);
        }
      });
    }
  }

  return (
    <ThemedView style={{ alignItems: "center" }}>
      <Image
        className="w-32 h-32 mt-10 aspect-[7/10] my-2"
        source={useThemeMascot(true)}
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
        <BouncyCheckbox
          onPress={(pressed) => {
            setPasswordVisible(pressed);
          }}
          fillColor={useThemeColor("primary")}
        />
        <Text
          style={{ color: useThemeColor("text-secondary") }}
          className="font-medium text-xl my-auto -ml-2"
        >
          Mostrar senha
        </Text>
      </View>
      <Button
        onPress={() => handleSignUp()}
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
        Já está registrado? Faça{" "}
        <ThemedText onPress={() => router.navigate("/login")} type="link">
          login
        </ThemedText>
        !
      </ThemedText>
    </ThemedView>
  );
}
