import React from 'react';
import { Image, StyleSheet, Dimensions, Text } from 'react-native-web';

import top from '../../assets/top-bar.png';

const width = Dimensions.get('window').width;

export default function Cesta() {
  return (
    <>
    <Image 
      source={top}
      style={styles.image}
    />
    <Text>Detalhes</Text>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",   // set your desired width
    height: 578 / 768 * width,  // set your desired height
    resizeMode: 'contain'
  }
});