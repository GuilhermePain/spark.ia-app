import { Stack } from '@/router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import '../global.css';
import { Header } from '@/components';
import SCREEN_OPTIONS from '@/constants/ScreenOptions';
import FONTS from '@/constants/Fonts';
import routes from '@/router/routes';
import Constants from 'expo-constants';

function RootLayout() {
  const [loaded, error] = useFonts(FONTS);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerTitle: (props) => <Header {...props} />,
        ...SCREEN_OPTIONS,
      }}
    >
      {routes.map(({ name, options }, index) => (
        <Stack.Screen key={index} name={name} options={options} />
      ))}
    </Stack>
  );
}

let AppEntryPoint = RootLayout;

if (
  Constants.expoConfig?.extra &&
  Constants.expoConfig.extra.storybookEnabled === 'true'
) {
  AppEntryPoint = require('../.storybook').default;
}

export default AppEntryPoint;
