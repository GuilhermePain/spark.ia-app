import foreign_language_questions from '@/constants/foreign_language_questions';

export default function getForeignLanguageQuestions(year: number) {
  return foreign_language_questions[year];
}
