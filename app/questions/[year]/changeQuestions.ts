import { router } from '@/router';

const changeQuestions = (change: number, question: string, year: string) => {
  const targetQuestion = parseInt(question) + change;
  if (targetQuestion > 0 && targetQuestion <= 180)
    router.replace(`/questions/${year}/${targetQuestion}`);
};

export default changeQuestions;
