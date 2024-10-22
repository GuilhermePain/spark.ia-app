import { router } from '@/router';

const changeQuestions = (change: number, question: string, year: string) => {
  const targetQuestion = parseInt(question) + change;
  if (targetQuestion > 0 && targetQuestion <= 180)
    router.replace({
      pathname:
        `/questions/${year}/${targetQuestion + (question.includes("-ingles") && targetQuestion <= 5 ? "-ingles" : "")}` as '/questions/[year]/[question]',
      params: {
        animationType: change > 0 ? 'slide_from_right' : 'slide_from_left',
      } as any,
    });
};

export default changeQuestions;
