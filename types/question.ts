export default interface Question {
  content: string;
  image: string;
  command: string;
  alternatives: string[];
  subjects: string[];
  answer: string;
  comment: string;
}
