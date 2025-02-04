import React from "react"
import { Tabs } from "expo-router"
import HomeIcon from "../../../assets/icons/Home"
import ShoppingCartIcon from "../../../assets/icons/Cart"
import CategoryIcon from "../../../assets/icons/Category"
import ProfileIcon from "./../../../assets/icons/Profile"

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 55,
          paddingBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 13,
          marginTop: 2,
        },
        tabBarActiveTintColor: 'green', // Set active color for icon and label
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <HomeIcon height={28} width={28} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="category"
        options={{
          title: "Categories",
          tabBarIcon: ({ color, size }) => (
            <CategoryIcon width={28} height={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, size }) => (
            <ShoppingCartIcon
              width={28}
              height={28}
              color={color}
              strokeWidth={1.4}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon height={28} width={28} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}

export default _layout
