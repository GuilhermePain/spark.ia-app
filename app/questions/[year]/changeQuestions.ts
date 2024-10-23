import { foreign_language_questions } from '@/constants';
import { router } from '@/router';

const changeQuestions = (change: number, question: string, year: string) => {
  const targetQuestion = parseInt(question) + change;
  if (targetQuestion > 0 && targetQuestion <= 180)
    router.replace({
      pathname:
        `/questions/${year}/${targetQuestion + (question.includes('-ingles') && foreign_language_questions[parseInt(year)].includes(targetQuestion) ? '-ingles' : '')}` as '/questions/[year]/[question]',
      params: {
        animationType: change > 0 ? 'slide_from_right' : 'slide_from_left',
      } as any,
    });
};

export default changeQuestions;
