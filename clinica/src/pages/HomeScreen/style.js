import { StyleSheet } from 'react-native';
import { paleta } from '../../styles/paleta';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 20,
    width: '80%',
    textAlign: 'center',
    backgroundColor: paleta.preto,
    fontSize: 24,
    paddingVertical: 10,
    color: '#fff',
    fontWeight: '600',
  },
});

