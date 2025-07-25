import React from "react"
import { Stack } from "expo-router"
import AppStore from "../context/AppStore"
import { StatusBar } from "react-native";

const _layout = () => {
  return (
    <AppStore>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="intro2" />
        <Stack.Screen name="intro3" />
        <Stack.Screen name="onboarding" />
      </Stack>
      <StatusBar barStyle="dark-content" backgroundColor="rgb(94, 191, 94)" />
    </AppStore>
  )
}

export default _layout
