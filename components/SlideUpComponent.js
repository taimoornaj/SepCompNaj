// SlideUpComponent.js
import React, { useRef, useEffect } from 'react';
import { Alert, Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from './Card';

const SlideUpComponent = ({ isVisible, onHide, }) => {
  const translateY = useRef(new Animated.Value(500)).current;

  useEffect(() => {
    if (isVisible) {
      slideIn();
    } else {
      slideOut();
    }
  }, [isVisible]);

  const slideIn = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 150,
      useNativeDriver: true,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(translateY, {
      toValue: 500,
      duration: 150,
      useNativeDriver: true,
    }).start(() => {
      // if (translateY._value == 0) {
        alert("sdfsdf")
        onHide();
      // }
    });
  };
  
  const texts = [
    "How much effort did you personally have to put fourth to avail the service?",
    "How satisfied are you with the overall experience while availing the service?",
    "How much effort did you personally have to put fourth to avail the service?",
  ];
  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateY }],
          opacity: isVisible ? 1 : 0,
        },
      ]}
    >
      <TouchableOpacity onPress={slideOut}>
        <Text style={styles.closeButton}>Close</Text>
      </TouchableOpacity>
      {texts.map((text, index) => (
        <Card key={index} text={text} />
      ))}
    
    <TouchableOpacity style={{backgroundColor:'#013188',color:'#fff',marginVertical:7,paddingVertical:13,borderRadius:50,}} onPress={slideOut}>
        <Text style={styles.nextbtnText}>Next</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 15,
    // borderWidth:10,
    // borderColor:'black',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
  closeButton: {
    fontSize: 16,
    color: 'black',
    textAlign: 'right',
  },nextbtnText:{
    fontSize: 16,
    color: 'white',
    textAlign: 'center',

  }
});

export default SlideUpComponent;
