import { useThemeColor } from '@/hooks/useThemeColor';

const SCREEN_OPTIONS = {
  headerBackVisible: false,
  headerBackButtonMenuEnabled: false,
  statusBarColor: '#011F3B',
  headerTintColor: '#fff',
  headerStyle: {
    backgroundColor: useThemeColor('foreground'),
  },
};

export default SCREEN_OPTIONS;
