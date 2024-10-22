import { Stack } from '@/router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import '../global.css';
import { Header } from '@/components';
import { screen_options, fonts } from '@/constants';
import routes from '@/router/routes';
import Constants from 'expo-constants';
import { useThemeColor } from '@/hooks';
import { setBackgroundColorAsync } from 'expo-navigation-bar';

function RootLayout() {
  const [loaded, error] = useFonts(fonts);
  const headerBackgroundColor = useThemeColor('foreground');
  const navigationBarColor = useThemeColor('navbar');
  setBackgroundColorAsync(navigationBarColor);

  useEffect(() => {
    if (loaded || error) {
      setTimeout(() => SplashScreen.hideAsync(), 1000);
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack
      initialRouteName="home"
      screenOptions={{
        headerTitle: (props) => <Header {...props} />,
        headerStyle: {
          backgroundColor: headerBackgroundColor,
        },
        ...screen_options,
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
