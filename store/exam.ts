import { Question } from '@/types';
import { getData, storeData } from './basic';

export const getAllExamData = () => {
  return getData('enem');
};

export const storeExamData = async (exam: string, newData: Object) => {
  const data = (await getAllExamData()) ?? {};
  data[exam] = newData;

  await storeData(data, 'enem');
};

export const getExamQuestion = async (exam: string, question: string) => {
  const data = await getAllExamData();

  if (!data || !data[exam]) return null;

  return data[exam][question] as Question;
};

export const getAvailableExams = async () => {
  const data = await getAllExamData();

  return data ? Object.keys(data) : [];
};

export const clearSpecificExamData = async (exam: string) => {
  const data = await getAllExamData();
  try {
    delete data[exam];
    storeExamData(exam, data);
  } catch {}
};
