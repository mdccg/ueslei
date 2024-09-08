import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { paleta } from '../styles/paleta';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export default function Item({ pet, navigate }) {
  const { setData } = useContext(UserContext);
  
  const updatePet = () => {
    navigate('New', {
      petAtualizado: pet,
    });
  }

  const deletePet = () => {
    setData((data) => data.filter(({ id }) => id !== pet.id));
  }

  return (
    <View style={styles.container}>
      <View style={styles.tituloContainer}>
        {
          pet.especie === 'Cachorro' ? 
          <FontAwesome5 name='dog' size={12} color="#fff" /> :
          <FontAwesome5 name='cat' size={12} color="#fff" />
        }
        <Text style={styles.tituloTexto}>{pet.especie}</Text>
        <Text style={styles.tituloTexto}>{pet.nome}</Text>
      </View>

      <View style={styles.descricaoContainer}>
        <Text style={styles.descricaoTexto}>Raça: {pet.raca}</Text>
        <Text style={styles.descricaoTexto}>Porte: {pet.porteAnimal}</Text>
        <Text style={styles.descricaoTexto}>Cor: {pet.corPredominante}</Text>
        <Text style={styles.descricaoTexto}>Obs: {pet.observacao}</Text>
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botao} onPress={updatePet}>
          <Text>Atualizar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={deletePet}>
          <Text>Deletar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  botoes: {
    flexDirection: 'row',
  },

  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    flex: 1,

    borderColor: paleta.cinza,
    borderWidth: 1,
  },

  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 8,
  },
  tituloContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
    backgroundColor: paleta.cinza,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  tituloTexto: {
    fontWeight: '500',
    color: '#fff',
  },
  descricaoContainer: {
    width: 280,
    backgroundColor: '#e8e8e8e8',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  descricaoTexto: {
  },
});