import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Avatar, Button, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function TeacherDashboard() {
  const theme = useTheme();
  const router = useRouter();

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <View style={styles.header}>
        <View>
          <Text variant="headlineMedium" style={styles.greeting}>Hola, Profesor</Text>
          <Text variant="bodyMedium" style={styles.subtitle}>Resumen de hoy</Text>
        </View>
        <Avatar.Icon size={48} icon="account" />
      </View>

      <View style={styles.statsContainer}>
        <Card style={styles.statCard}>
          <Card.Content>
            <Text variant="titleMedium">Cursos Asignados</Text>
            <Text variant="headlineLarge" style={{ color: theme.colors.primary }}>4</Text>
          </Card.Content>
        </Card>
        <Card style={styles.statCard}>
          <Card.Content>
            <Text variant="titleMedium">Alumnos Totales</Text>
            <Text variant="headlineLarge" style={{ color: theme.colors.secondary }}>120</Text>
          </Card.Content>
        </Card>
      </View>

      <Text variant="titleLarge" style={styles.sectionTitle}>Acciones Rápidas</Text>
      
      <View style={styles.actionsContainer}>
        <Button 
          mode="contained" 
          icon="book-open-variant" 
          style={styles.actionButton}
          contentStyle={styles.actionButtonContent}
          onPress={() => router.push('/(teacher)/courses')}
        >
          Ver Mis Cursos
        </Button>
        <Button 
          mode="contained-tonal" 
          icon="calendar-check" 
          style={styles.actionButton}
          contentStyle={styles.actionButtonContent}
          onPress={() => console.log('Tomar asistencia')}
        >
          Tomar Asistencia
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 8,
  },
  greeting: {
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    width: '48%',
    elevation: 2,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 16,
  },
  actionsContainer: {
    gap: 12,
  },
  actionButton: {
    borderRadius: 12,
  },
  actionButtonContent: {
    paddingVertical: 8,
    justifyContent: 'flex-start',
  }
});
