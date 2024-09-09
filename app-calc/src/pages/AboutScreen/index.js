import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre nós</Text>
      <Text style={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel rerum similique obcaecati quo, laudantium molestiae, ad porro asperiores praesentium voluptatem ducimus doloribus? Dolorum deserunt magni odio quo ut, vero non?</Text>
      <Text style={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel rerum similique obcaecati quo, laudantium molestiae, ad porro asperiores praesentium voluptatem ducimus doloribus? Dolorum deserunt magni odio quo ut, vero non?</Text>
      <Text style={styles.paragrafo}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel rerum similique obcaecati quo, laudantium molestiae, ad porro asperiores praesentium voluptatem ducimus doloribus? Dolorum deserunt magni odio quo ut, vero non?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  titulo: {
    fontSize: 24,
  },

  paragrafo: {
    marginBottom: 10,
  },
});

export default AboutScreen;