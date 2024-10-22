import Question from './question';

export default interface ExamData {
  [keys: string]: Question;
}
