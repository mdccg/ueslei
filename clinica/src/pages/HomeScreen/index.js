import React, { useContext } from 'react';
import {
  FlatList,
  Text,
  View,
} from 'react-native';
import { UserContext } from '../../../context/UserContext';
import Item from '../../components/Item';
import { styles } from './style';

export default function HomeScreen(props) {
  const { data } = useContext(UserContext);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clínica Veterinária</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Item
            pet={item}
            navigate={props.navigation.navigate} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}