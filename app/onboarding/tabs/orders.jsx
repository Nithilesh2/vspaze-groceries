import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const orders = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/noOrders.jpg')} style={styles.image}/>
    </View>
  )
}

export default orders

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
})