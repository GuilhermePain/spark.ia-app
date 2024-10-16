const apiEndpoint = `${process.env.EXPO_PUBLIC_ENEM_API_URL}/exam`;

const fetchExams = async () => {
  const res = await fetch(apiEndpoint);
  return await res.json();
};
export default fetchExams;
