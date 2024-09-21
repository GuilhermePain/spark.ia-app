import signup from "@/api/signup";
import { router } from "@/router";
export default async function handleSignUp(
  email: string,
  password: string,
  confirmPassword: string,
  name: string,
  setError: Function,
  resetForm: Function
) {
  if (!email || !password || !confirmPassword || !name) return;
  if (password !== confirmPassword) {
    return setError("Suas senhas não estão iguais!");
  }

  if (password.length < 8) {
    return setError("Sua senha deve conter pelo menos 8 caracteres!");
  }

  try {
    await signup(email, password, confirmPassword, name);
    resetForm();
    setError("");
    router.navigate("/login");
  } catch (err: unknown) {
    if (err instanceof Error) setError(err.message);
  }
}
