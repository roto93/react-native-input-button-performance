import React, { memo } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Key = memo(({ text, setBoxArray }) => {
  console.log('key', text)
  const onPress = () => {
    setBoxArray((prevArray) => {
      const newBoxArray = [...prevArray]
      const indexToWrite = newBoxArray.findIndex(item => item.t === undefined)
      if (indexToWrite === -1) return prevArray
      newBoxArray[indexToWrite].t = text
      return newBoxArray
    })
  }
  return (
    <TouchableOpacity style={styles.key} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
})

const styles = StyleSheet.create({
  key: {
    width: 40,
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
    marginBottom: 4
  }
})
export default Key