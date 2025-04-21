import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import LoginPage from './src/auth/login';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    const prepareApp = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await SplashScreen.hideAsync();
    };

    prepareApp();
  }, []);

  return <LoginPage />;
}
