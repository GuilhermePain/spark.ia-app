const apiEndpoint = `${process.env.EXPO_PUBLIC_API_URL}/exam`;

const fetchExam = async (year: string) => {
  const res = await fetch(`${apiEndpoint}/${year}`);
  return await res.json();
};
export default fetchExam;
