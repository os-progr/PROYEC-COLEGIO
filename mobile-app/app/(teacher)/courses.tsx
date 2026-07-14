import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Card, IconButton, useTheme, Chip } from 'react-native-paper';

// Mock data para ver cómo queda visualmente
const MOCK_COURSES = [
  { id: '1', name: 'Matemáticas - 3ro A', students: 30, schedule: 'Lun - Mie' },
  { id: '2', name: 'Matemáticas - 3ro B', students: 28, schedule: 'Mar - Jue' },
  { id: '3', name: 'Física - 4to A', students: 25, schedule: 'Vie' },
  { id: '4', name: 'Física - 4to B', students: 37, schedule: 'Lun' },
];

export default function TeacherCourses() {
  const theme = useTheme();

  const renderItem = ({ item }) => (
    <Card style={styles.courseCard} mode="elevated" elevation={1}>
      <Card.Title
        title={item.name}
        titleStyle={styles.cardTitle}
        right={(props) => <IconButton {...props} icon="chevron-right" onPress={() => {}} />}
      />
      <Card.Content style={styles.cardContent}>
        <Chip icon="account-group" style={styles.chip}>{item.students} Alumnos</Chip>
        <Chip icon="calendar-clock" style={styles.chip}>{item.schedule}</Chip>
      </Card.Content>
    </Card>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text variant="bodyLarge" style={styles.description}>
        Selecciona un curso para gestionar asistencias o calificaciones.
      </Text>
      
      <FlatList
        data={MOCK_COURSES}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  description: {
    marginBottom: 16,
    color: '#666',
  },
  listContainer: {
    gap: 12,
    paddingBottom: 20,
  },
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  cardContent: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 4,
  },
  chip: {
    backgroundColor: '#f0f4ff',
  }
});
