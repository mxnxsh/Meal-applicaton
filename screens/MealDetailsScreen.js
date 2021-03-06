import React from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { HeaderButtons, Item } from "react-navigation-header-buttons";


import { MEALS } from "../data/dummy-data";
import CustomHeaderButton from '../components/CustomHeaderButton'

const MealDetailsScreen = props => {
  const mealId = props.navigation.getParam('mealId')

  const selectedMeal = MEALS.find(meal => meal.id === mealId);


  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Press"
        onPress={() => {
          props.navigation.navigate({ routeName: 'Categories' })
        }}
      />
    </View>
  )
}

MealDetailsScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return {
    headerTitle: selectedMeal.title,
    headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title='Favorite'
        iconName='ios-star'
        onPress={() => {
          console.log('Items marked as favourite')
        }}
      />
    </HeaderButtons>
  }
}

export default MealDetailsScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
