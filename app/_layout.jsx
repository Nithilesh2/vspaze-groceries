import React from "react"
import { Stack } from "expo-router"
import AppStore from "../context/AppStore"

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
    </AppStore>
  )
}

export default _layout
