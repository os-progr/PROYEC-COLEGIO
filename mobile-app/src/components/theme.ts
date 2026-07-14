import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#4361EE',       // Un azul vibrante
    secondary: '#3F37C9',     // Azul oscuro elegante
    tertiary: '#4895EF',      // Celeste claro
    background: '#F8F9FA',    // Gris muy suave para fondo
    surface: '#FFFFFF',       // Superficies blancas puras
    surfaceVariant: '#E9ECEF', // Superficies secundarias
    error: '#EF233C',         // Rojo premium
    text: '#212529',          // Texto oscuro intenso
    onPrimary: '#FFFFFF',
    elevation: {
      level0: 'transparent',
      level1: '#f4f6fa',
      level2: '#eff2f8',
      level3: '#e9eef6',
      level4: '#e6ebf5',
      level5: '#e0e7f2',
    },
  },
  roundness: 12, // Bordes más redondeados y modernos
};
