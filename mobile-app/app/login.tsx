import { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { TextInput, Button, Text, Surface } from 'react-native-paper';
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { theme } from '../src/components/theme';
import { api } from '../src/services/api';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      const msg = 'Por favor ingresa tu correo y contraseña';
      return Platform.OS === 'web' ? window.alert(msg) : Alert.alert('Aviso', msg);
    }

    try {
      setLoading(true);
      const response = await api.post('/auth/login', { email, password });
      
      const { access_token, user } = response.data;
      
      // Guardar sesión de forma segura
      if (Platform.OS !== 'web') {
        await SecureStore.setItemAsync('token', access_token);
        await SecureStore.setItemAsync('user', JSON.stringify(user));
      } else {
        localStorage.setItem('token', access_token);
        localStorage.setItem('user', JSON.stringify(user));
      }

      // Redirigir al panel
      router.replace('/(teacher)');
    } catch (error: any) {
      const msg = error.response?.data?.message || 'Error de conexión con el servidor';
      if (Platform.OS === 'web') {
        window.alert(msg);
      } else {
        Alert.alert('Error', msg);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.backgroundDesign}>
        <View style={styles.circle1} />
        <View style={styles.circle2} />
      </View>

      <Surface style={styles.card} elevation={5}>
        <Text variant="headlineMedium" style={styles.title}>
          Bienvenido
        </Text>
        <Text variant="bodyMedium" style={styles.subtitle}>
          Ingresa a tu cuenta para continuar
        </Text>

        <TextInput
          mode="outlined"
          label="Correo Electrónico"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          left={<TextInput.Icon icon="email" />}
        />

        <TextInput
          mode="outlined"
          label="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          left={<TextInput.Icon icon="lock" />}
        />

        <Button 
          mode="contained" 
          onPress={handleLogin} 
          style={styles.button}
          contentStyle={styles.buttonContent}
          loading={loading}
          disabled={loading}
        >
          Iniciar Sesión
        </Button>
      </Surface>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundDesign: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  circle1: {
    position: 'absolute',
    top: -100,
    right: -50,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(67, 97, 238, 0.1)',
  },
  circle2: {
    position: 'absolute',
    bottom: -150,
    left: -100,
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: 'rgba(76, 201, 240, 0.1)',
  },
  card: {
    width: '90%',
    maxWidth: 400,
    padding: 30,
    borderRadius: 20,
    backgroundColor: 'white',
  },
  title: {
    fontWeight: 'bold',
    color: theme.colors.primary,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    marginBottom: 15,
    backgroundColor: 'transparent',
  },
  button: {
    marginTop: 10,
    borderRadius: 10,
  },
  buttonContent: {
    paddingVertical: 8,
  },
});
