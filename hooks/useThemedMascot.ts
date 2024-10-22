import { useColorScheme } from 'react-native';
export default function useThemedMascot(inverted?: boolean) {
  const darkMode = useColorScheme();

  if (inverted !== undefined) {
    return darkMode !== 'dark'
      ? require('../assets/images/black-logo.png')
      : require('../assets/images/white-logo.png');
  } else {
    return darkMode === 'dark'
      ? require('../assets/images/black-logo.png')
      : require('../assets/images/white-logo.png');
  }
}
