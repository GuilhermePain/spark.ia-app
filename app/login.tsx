import { Button } from "@/components/Button";
import { ThemedView } from "@/components/ThemedView";
import { Image, Text, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Input } from "@/components/Input";
import { useState } from "react";
import { useColorScheme } from "react-native";
import { HorizontalLine } from "@/components/HorizontalLine";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useThemeColor } from "@/hooks/useThemeColor";
import { router } from "expo-router";

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordVisible] = useState(false);

  async function handleLogin() {
    if (email && password) {
      fetch("http://10.0.0.102:3001/api/autenticar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          senha: password,
          mobile: true,
        }),
      }).then(async (res) => {
        const data = await res.json();
        if (res.status === 200) {
          router.navigate("/chat");
        } else {
          setError(data.message);
        }
      });
    }
  }

  return (
    <ThemedView style={{ alignItems: "center" }}>
      <Image
        className="w-32 h-32 mt-20 aspect-[7/10] my-2"
        source={
          useColorScheme() != "light"
            ? require("../assets/images/logo-branca.png")
            : require("../assets/images/logo-preta.png")
        }
      />
      <ThemedText type="title" className="scale-125 mt-10 font-bold">
        Login
      </ThemedText>
      <HorizontalLine />
      <ThemedText type="label" className="text-left w-4/5 mb-1 mt-4">
        Email
      </ThemedText>
      <Input value={email} setValue={setEmail} className="w-4/5" />
      <ThemedText type="label" className="text-left w-4/5 mb-1 mt-4">
        Senha
      </ThemedText>
      <Input
        secure={!passwordShown}
        value={password}
        setValue={setPassword}
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
        onPress={() => handleLogin()}
        width={200}
        className="mt-4"
        title="Entrar"
      />

      {error && (
        <Text className="text-2xl font-semibold text-red-600 mt-3">
          {error}
        </Text>
      )}
    </ThemedView>
  );
}
