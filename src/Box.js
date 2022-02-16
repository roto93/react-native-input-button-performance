import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Box = memo(({ text }) => {
  console.log('box', text)
  return (
    <View style={styles.key}>
      <Text>{text}</Text>
    </View>
  )
})

const styles = StyleSheet.create({
  key: {
    width: 40,
    height: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    marginBottom: 8
  }
})
export default Box