import { TextStyle } from '@/components/Text';

export const getTypewriterStyle = (textColor: string) => {
  return {
    fontFamily: 'Nunito_Medium',
    fontSize: 18,
    flexWrap: 'wrap',
    height: 'auto',
    color: textColor,
  } as TextStyle;
};
