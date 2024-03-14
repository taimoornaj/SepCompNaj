import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native';
import SlideUpComponent from './components/SlideUpComponent';
import colors from './colors';
const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View style={styles.container}>
      
        <TouchableOpacity style={styles.button} onPress={toggleVisibility}>
          <Text style={styles.buttonText}>Toggle SlideUp Component {"result "+isVisible}</Text>
        </TouchableOpacity>
      </View>
      <View style={{ position: 'absolute', bottom: 0, width: '100%', alignItems: 'center' }}>
        <SlideUpComponent isVisible={isVisible} onHide={toggleVisibility}  />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginBottom: 20,
  },
  button: {
    padding: 13,
   
    backgroundColor: colors.primary,
    borderRadius: 15,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default App;
