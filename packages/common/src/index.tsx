/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export const App = () => {
  const [count, setCount] = useState(0);

  return(
    <View style={styles.container}>
      <Text style={styles.welcome}>Hello World!!</Text>
      <Text style={styles.instructions}>This is a test</Text>
      <Text style={styles.instructions}>{count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)}/>
      <Button title="Reset" onPress={() => setCount(0)}/>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});