import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router';

const _layout = () => {
  return (
    <>
      <Stack screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name='index' />
        <Stack.Screen name='register' />
        <Stack.Screen name='tabs' />
      </Stack>
    </>

  )
}

export default _layout