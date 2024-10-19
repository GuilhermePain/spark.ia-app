const apiEndpoint = `${process.env.EXPO_PUBLIC_API_URL}/novousuario`;

export default async function signup(
  email: string,
  password: string,
  confirmPassword: string,
  name: string
) {
  const response = await fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: name,
      email: email,
      senha: password,
      confirmarSenha: confirmPassword,
      mobile: true,
    }),
  });
  const data = await response.json();

  if (response.status !== 201) {
    throw new Error(data.message);
  }
}
