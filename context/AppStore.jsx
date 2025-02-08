import React, { useState } from "react"
import { AppContext } from "./AppContext"

const AppStore = ({ children }) => {
  const [likes, setLikes] = useState({})
  const [cart, setCart] = useState({})

  const handleLike = (itemId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [itemId]: !prevLikes[itemId],
    }))
  }

  const handleAdd = (itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: (prevCart[itemId] || 0) + 1,
    }))
  }

  const handleRemove = (itemId) => {
    setCart((prevCart) => {
      if (!prevCart[itemId]) return prevCart
      const updatedCart = { ...prevCart }
      if (updatedCart[itemId] === 1) {
        delete updatedCart[itemId]
      } else {
        updatedCart[itemId] -= 1
      }
      return updatedCart
    })
  }

  return (
    <AppContext.Provider
      value={{ likes, handleLike, cart, handleAdd, handleRemove }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppStore
