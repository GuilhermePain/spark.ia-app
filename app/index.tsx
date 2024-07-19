import { Button } from "@/components/Button";
import { router } from "expo-router";
import { ThemedView } from "@/components/ThemedView";

export default function Index() {
  return (
    <ThemedView
      style={{
        alignItems: "center",
      }}
    >
      <Button
        className="mt-10"
        width={200}
        onPress={() => router.replace("/login")}
        title="Outra página"
      />
    </ThemedView>
  );
}
