import getForeignLanguageQuestions from './getForeignLanguageQuestions';

export default function parseQuestion(
  question: string | number,
  examYear: string,
  selectedLanguage?: string,
  fromApply?: boolean
) {
  const examForeignLanguageQuestions = getForeignLanguageQuestions(
    parseInt(examYear)
  ) as number[];

  question = question.toString();
  const isCurrentQuestionForeignLanguage = question.includes('-ingles');

  let q: number | string =
    parseInt(question.toString().replace('-ingles', '')) + (fromApply ? 1 : 0);

  if (
    (selectedLanguage === 'inglês' || isCurrentQuestionForeignLanguage) &&
    examForeignLanguageQuestions.includes(q)
  ) {
    q = `${q}-ingles`;
  }
  return q.toString();
}
