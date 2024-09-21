import login from "@/api/login";
import { router } from "@/router";

export default async function handleLogin(
  email: string,
  password: string,
  setError: Function
) {
  if (!email || !password) return;

  try {
    await login(email, password);
    setError("");
    router.navigate("/home");
  } catch (err: unknown) {
    if (err instanceof Error) setError(err.message);
  }
}
