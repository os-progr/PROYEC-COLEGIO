import { Redirect } from 'expo-router';

export default function Index() {
  // Redirigir al login por defecto
  return <Redirect href="/login" />;
}
