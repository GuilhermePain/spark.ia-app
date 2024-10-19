const apiEndpoint = `${process.env.EXPO_PUBLIC_API_URL}/autenticar`;

export default async function login(email: string, password: string) {
  const response = await fetch(apiEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      senha: password,
    }),
  });

  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(data.message);
  }

  return response;
}
