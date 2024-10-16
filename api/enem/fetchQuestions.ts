const apiEndpoint = `${process.env.EXPO_PUBLIC_ENEM_API_URL}/exams`;

const fetchQuestion = async (year: string, question: string) => {
  const url = `${apiEndpoint}/${year}/questions/${question}`;
  const res = await fetch(url);
  return await res.json();
};
export default fetchQuestion;
