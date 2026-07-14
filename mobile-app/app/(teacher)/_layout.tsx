import { Stack } from 'expo-router';
import { useTheme } from 'react-native-paper';

export default function TeacherLayout() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ 
          title: 'Panel de Profesor',
        }} 
      />
      <Stack.Screen 
        name="courses" 
        options={{ 
          title: 'Mis Cursos',
        }} 
      />
    </Stack>
  );
}
