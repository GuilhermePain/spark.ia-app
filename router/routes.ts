import { ScreenProps } from 'expo-router/build/useScreens';

const routes: Route[] = [
  { name: 'index', options: { headerShown: false } },
  { name: 'login', options: { headerShown: false } },
  { name: 'signup', options: { headerShown: false } },
  { name: 'flashcard/[subject]/[id]', options: { headerShown: false } },
  { name: 'home' },
  { name: 'chat' },
  { name: 'questions/[year]/[question]' },
];

export default routes;

interface Route extends ScreenProps {}
