import React from 'react'
import { Button, StyleSheet, Text, View, Platform } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'
import Colors from "../constants/Color";

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam('categoryId')

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  return (
    <View style={styles.screen}>
      <Text> Category Meals Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Press"
        onPress={() => {
          props.navigation.navigate({ routeName: 'MealDetail' })
        }}
      />
    </View>
  )
}

CategoryMealsScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId')

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

  return {
    headerTitle: selectedCategory.title,
  }
}

export default CategoryMealsScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
