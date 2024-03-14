import { Image, StyleSheet, Text, View } from 'react-native'
// import moodAverage from '../assets/mood-average.png';
import React from 'react'
import colors from '../colors';
const Card = ({text}) => {
  const images = [
    require('../assets/img/mood-very-bad.png'),
    require('../assets/img/mood-bad.png'),
    require('../assets/img/mood-average.png'),
    require('../assets/img/mood-good.png'),
    require('../assets/img/mood-very-good.png'),
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.cardContainer}>
        {/* <Image src='../assets/mood-bad.png'/> */}
        {images.map((image, index) => (
          <Image key={index} source={image} style={styles.moodImage} />
        ))}
      </View>
      <View style={styles.cardContainer}>
        <Text style={styles.text}>Very High Effort</Text>
        <Text style={styles.text}>Minimal Effort</Text>
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  text:{color:colors.primary},
  container: {
  backgroundColor: '#f0f0f0',
  borderRadius: 10,
  marginVertical: 13,
  shadowColor: '#000000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.15,
  shadowRadius: 4,
  // Android
  elevation: 4,
  // Other styles
  backgroundColor: '#ffffff',
  padding: 18,
  borderRadius: 10,
},
cardContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 5,
},
moodImage: {
  height: 36,
  width: 36,
  resizeMode: 'contain',
  marginVertical:5,
},
})