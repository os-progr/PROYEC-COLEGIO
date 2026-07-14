import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, Text } from 'react-native';
import { TextInput, Button, Card, useTheme } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const router = useRouter();

  const handleLogin = () => {
    setLoading(true);
    // Simular inicio de sesión
    setTimeout(() => {
      setLoading(false);
      // alert o redirección
      console.log('Login exitoso');
    }, 1500);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <LinearGradient
        colors={['#4361EE', '#4895EF', '#4CC9F0']}
        style={styles.background}
      />
      
      <View style={styles.content}>
        <Card style={styles.card} mode="elevated" elevation={5}>
          <Card.Content style={styles.cardContent}>
            
            <View style={styles.headerContainer}>
              <Text style={[styles.title, { color: theme.colors.primary }]}>ColegioApp</Text>
              <Text style={styles.subtitle}>Portal Académico</Text>
            </View>

            <TextInput
              label="Correo Electrónico"
              value={email}
              onChangeText={setEmail}
              mode="outlined"
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
              left={<TextInput.Icon icon="email" />}
              theme={{ roundness: 12 }}
            />

            <TextInput
              label="Contraseña"
              value={password}
              onChangeText={setPassword}
              mode="outlined"
              secureTextEntry
              style={styles.input}
              left={<TextInput.Icon icon="lock" />}
              theme={{ roundness: 12 }}
            />

            <Button 
              mode="contained" 
              onPress={handleLogin}
              loading={loading}
              style={styles.button}
              contentStyle={styles.buttonContent}
              labelStyle={styles.buttonLabel}
            >
              Iniciar Sesión
            </Button>
            
            <Button 
              mode="text" 
              onPress={() => {}}
              style={styles.textButton}
              labelStyle={styles.textButtonLabel}
            >
              ¿Olvidaste tu contraseña?
            </Button>
          </Card.Content>
        </Card>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    maxWidth: 500,
    width: '100%',
    alignSelf: 'center',
  },
  card: {
    borderRadius: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.95)', // Efecto sutil para que el gradiente resalte
  },
  cardContent: {
    padding: 24,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 16,
    color: '#6c757d',
    marginTop: 8,
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#ffffff',
  },
  button: {
    marginTop: 16,
    borderRadius: 12,
  },
  buttonContent: {
    paddingVertical: 8,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  textButton: {
    marginTop: 12,
  },
  textButtonLabel: {
    fontSize: 14,
  }
});
