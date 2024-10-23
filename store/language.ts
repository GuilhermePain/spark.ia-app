import { getData, storeData } from './basic';

export const clearStoredLanguage = () => {
  storeData(null, 'language');
};

export const storeLanguage = (language: 'inglês' | 'espanhol') => {
  storeData(language, 'language');
};

export const getStoredLanguage = () => {
  return getData('language');
};
