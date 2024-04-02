import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const BirdWatcherApp = () => {
  const [birdName, setBirdName] = useState('');
  const [birds, setBirds] = useState([]);

  const addBird = () => {
    if (birdName.trim() === '') return;

    const existingBirdIndex = birds.findIndex(b => b.name.toLowerCase() === birdName.toLowerCase());
    if (existingBirdIndex !== -1) {
      const updatedBirds = [...birds];
      updatedBirds[existingBirdIndex].count += 1;
      setBirds(updatedBirds);
    } else {
      setBirds(prevBirds => [...prevBirds, { name: birdName, count: 1 }]);
    }

    setBirdName('');
  };

  const incrementCount = (index) => {
    const updatedBirds = [...birds];
    updatedBirds[index].count += 1;
    setBirds(updatedBirds);
  };

  const decrementCount = (index) => {
    const updatedBirds = [...birds];
    if (updatedBirds[index].count > 0) {
      updatedBirds[index].count -= 1;
      setBirds(updatedBirds);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={birds}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.birdItem}>
            <Text style={styles.birdName}>{item.name}</Text>
            <Text>   </Text>
            <View style={styles.rightSide}>
          
            <TouchableOpacity onPress={() => decrementCount(index)}>
            
                <Text style={styles.plusMinus}>-</Text>
              </TouchableOpacity>
              <Text style={styles.birdCount}>{item.count}</Text>
              
              <TouchableOpacity onPress={() => incrementCount(index)}>
                <Text style={styles.plusMinus}>+</Text>
              </TouchableOpacity>
            
            </View>
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        value={birdName}
        onChangeText={text => setBirdName(text)}
        placeholder="Enter bird name"
      />
      <TouchableOpacity style={styles.addButton} onPress={addBird}>
        <Text style={styles.buttonText}>Add Bird</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'light grey'
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor:'#fff',
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  birdItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 5,
    borderWidth: 3, 
    borderColor: 'black', 
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  plusMinus: {
    fontSize: 20,
    marginHorizontal: 5,
  },
  birdName: {
    fontSize: 20, 
    fontWeight: 'bold',
  },
  birdCount: {
    fontSize: 20,
  },
});

export default BirdWatcherApp;