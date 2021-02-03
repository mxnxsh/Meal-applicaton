import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const MealDetailsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Meal Details Screen</Text>
      <Button
        title="Press"
        onPress={() => {
          props.navigation.navigate({ routeName: 'Categories' })
        }}
      />
    </View>
  )
}

export default MealDetailsScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
