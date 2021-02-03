import React from 'react'
import { FlatList, StyleSheet, } from 'react-native'


import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTitle from "../components/CategoryGridTitle";

const CategoriesScreen = props => {
  const renderGridItem = itemData => {
    return <CategoryGridTitle
      title={itemData.item.title}
      onSelect={() => {
        props.navigation.navigate(
          {
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id
            }
          }
        )
      }}
      color={itemData.item.color}
    />

  }
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      numColumns={2}
      data={CATEGORIES}
      renderItem={renderGridItem}
    />
  )
}

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',

}

export default CategoriesScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

})
