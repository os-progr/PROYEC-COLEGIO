import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { theme } from '../src/components/theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="login" />
        </Stack>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
