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
        <Stack.Screen name="onboarding" />
      </Stack>
      <StatusBar barStyle="light-content" backgroundColor="green" />
    </AppStore>
  )
}

export default _layout
