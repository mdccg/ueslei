import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, FlatList, Text, TouchableOpacity, View, Alert } from 'react-native';

const App = () => {
  const [textInput, setTextInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(null);

  const addOrUpdateTodo = () => {
    if (textInput === '') {
      Alert.alert('Aviso', 'Por favor, insira algum texto');
      return;
    }
    if (isEditing !== null) {
  
      const updatedTodos = todos.map((item) =>
        item.id === isEditing ? { ...item, text: textInput } : item
      );
      setTodos(updatedTodos);
      setIsEditing(null);
    } else {
  
      setTodos([...todos, { id: Date.now().toString(), text: textInput }]);
    }
    setTextInput('');
  };

  const deleteTodo = (id) => {
    const filteredTodos = todos.filter((item) => item.id !== id);
    setTodos(filteredTodos);
  };

  const editTodo = (id, text) => {
    setTextInput(text);
    setIsEditing(id);
  };

  const renderTodoItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{item.text}</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => editTodo(item.id, item.text)}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteTodo(item.id)}
        >
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua tarefa"
        value={textInput}
        onChangeText={(text) => setTextInput(text)}
      />
      <Button
        title={isEditing ? 'Atualizar Tarefa' : 'Adicionar Tarefa'}
        onPress={addOrUpdateTodo}
      />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={renderTodoItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 18,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginVertical: 5,
  },
  todoText: {
    fontSize: 18,
  },
  buttonGroup: {
    flexDirection: 'row',
  },
  editButton: {
    backgroundColor: '#4caf50',
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default App;