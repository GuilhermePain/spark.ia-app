import { fetchExam } from '@/api/enem';
import { getExamQuestion, storeExamData } from '@/store/exam';
import { ExamData } from '@/types';

const loadQuestion = async (
  processQuestionData: Function,
  year: string,
  question: string
) => {
  if (year && question) {
    const cachedExamQuestionData = await getExamQuestion(year, question);
    if (cachedExamQuestionData) {
      processQuestionData(cachedExamQuestionData);
      return;
    }

    fetchExam(year)
      .then((examData: ExamData) => {
        storeExamData(year, examData);
        processQuestionData(examData[question]);
      })
      .catch(() => {
        throw 'Erro ao pegar dados';
      });
  }
};

export default loadQuestion;
