import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const router = useRouter();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)"
                    options={{ 
                      headerShown: false 
                    }} />
      <Stack.Screen name="(tabs)" 
                    options={{
                      title: "",
                      headerShown: false,
                    }}/>
      <Stack.Screen name="screens" options={{ title: "" }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}