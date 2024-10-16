const apiEndpoint = `${process.env.EXPO_PUBLIC_API_URL}/api/exam`;

const fetchQuestion = async (year: string, question: string) => {
  const url = `${apiEndpoint}/${year}/${question}`;
  const res = await fetch(url);
  return await res.json();
};
export default fetchQuestion;
