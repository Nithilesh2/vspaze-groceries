import React from 'react'
import { Tabs } from 'expo-router';

const _layout = () => {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarStyle: {
        display: 'none'
      }
    }}>
      <Tabs.Screen name='index' />
      <Tabs.Screen name='AboutUs' />
      <Tabs.Screen name='TermsAndConditions' />
      <Tabs.Screen name='privacyPolicy' />
      <Tabs.Screen name='RefundPolicy' />
      <Tabs.Screen name='CancellationPolicy' />
      <Tabs.Screen name='ShippingPolicy' />
    </Tabs>
  )
}

export default _layout