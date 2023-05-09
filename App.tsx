import React, { useState } from 'react';
import { StyleSheet,ScrollView, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Apples' },
    { id: 2, name: 'Bananas' },
    { id: 3, name: 'Oranges' },
    { id: 4, name: 'Pineapples' }
  ]);
  const [newItem, setNewItem] = useState('');

  const addItem = () => {
    if (newItem.trim() !== '') {
      const newItemObject = { id: items.length + 1, name: newItem };
      setItems([...items, newItemObject]);
      setNewItem('');
    }
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Shopping List</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add Item..."
          onChangeText={(text) => setNewItem(text)}
          value={newItem}
        />
        <TouchableOpacity style={styles.addButton} onPress={addItem}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
     
      {items.map((item) => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.itemText}>{item.name}</Text>
          <TouchableOpacity onPress={() => deleteItem(item.id)}>
            <Icon name="times" size={24} color="#B22222" />
          </TouchableOpacity>
        </View>
        
      ))}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { backgroundColor: '#F08080', padding: 20,marginTop: 60, alignItems: 'center' },
  headerText: { fontSize: 25,fontWeight:'bold', color: '#fff' },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    flex: 1,
    height: 60,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  addButton: { backgroundColor: '#F08080', borderRadius: 5, padding: 10 },
  addButtonText: { color: '#fff' ,fontSize: 16,  fontWeight:'bold' },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: { fontSize: 16 },
});
