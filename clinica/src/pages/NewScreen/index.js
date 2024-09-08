import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
} from 'react-native';
import { styles } from './style';
import { useContext, useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { UserContext } from '../../../context/UserContext';

export default function NewScreen(props) {
  const { data, setData } = useContext(UserContext);

  const isFocused = useIsFocused();
  const [id, setId] = useState();
  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('');
  const [raca, setRaca] = useState('');
  const [porteAnimal, setPorteAnimal] = useState('');
  const [corPredominante, setCorPredominante] = useState('');
  const [observacoes, setObservacoes] = useState('');

  const salvarPet = () => {
    if (id) {
      setData((data) => data.filter(({ id }) => id !== pet.id));
    }
    
    const pet = {
      id: id || data.length + 1,
      nome,
      especie,
      raca,
      porteAnimal,
      corPredominante,
      observacao: observacoes,
    };

    setData((data) => {
      data.push(pet);
      return data;
    });
    zerarFormulario();
  }

  const zerarFormulario = () => {
    props.route.params = undefined;
    setId();
    setNome('');
    setEspecie('');
    setRaca('');
    setPorteAnimal('');
    setCorPredominante('');
    setObservacoes('');
    props.navigation.goBack();
  }

  useEffect(() => {
    if (props.route.params && props.route.params.petAtualizado) {
      setId(props.route.params.petAtualizado.id);
      setNome(props.route.params.petAtualizado.nome);
      setEspecie(props.route.params.petAtualizado.especie);
      setRaca(props.route.params.petAtualizado.raca);
      setPorteAnimal(props.route.params.petAtualizado.porteAnimal);
      setCorPredominante(props.route.params.petAtualizado.corPredominante);
      setObservacoes(props.route.params.petAtualizado.observacao);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar um Pet</Text>

      <TextInput 
        style={styles.input}
        placeholder='Nome'
        autoCapitalize='words'
        value={nome}
        onChangeText={setNome}
      />

      <TextInput 
        style={styles.input}
        placeholder='Espécie'
        autoCapitalize='words'
        value={especie}
        onChangeText={setEspecie}
      />
      
      <TextInput 
        style={styles.input}
        placeholder='Raça'
        autoCapitalize='words'
        value={raca}
        onChangeText={setRaca}
      />
      
      <TextInput 
        style={styles.input}
        placeholder='Porte do Pet'
        autoCapitalize='words'
        value={porteAnimal}
        onChangeText={setPorteAnimal}
      />
      
      <TextInput 
        style={styles.input}
        placeholder='Cor predominante do pet'
        autoCapitalize='words'
        value={corPredominante}
        onChangeText={setCorPredominante}
      />
      
      <TextInput 
        style={styles.input}
        placeholder='Observações'
        autoCapitalize='words'
        value={observacoes}
        onChangeText={setObservacoes}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={salvarPet}
        >
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={zerarFormulario}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>



      
    </View>
  )
}