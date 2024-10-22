import { ScreenProps } from 'expo-router/build/useScreens';

const routes: Route[] = [
  { name: 'index', options: { headerShown: false } },
  { name: 'login', options: { headerShown: false } },
  { name: 'signup', options: { headerShown: false } },
  { name: 'flashcard/[subject]/[id]' },
  { name: 'home' },
  { name: 'chat' },
  {
    name: 'questions/[year]/[question]',
    options: ({ route }) => {
      const { animationType } = (route.params as any) || {};

      return {
        animation: animationType ?? 'simple_push',
      };
    },
  },
  { name: 'questions' },
];

export default routes;

interface Route extends ScreenProps {}
