import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import MealItem from './MealItem'

const MealList = props => {

  const renderMealItem = itemData => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate(
            {
              routeName: 'MealDetail',
              params: {
                mealId: itemData.item.id
              }
            }
          )
        }}
      />
    )
  }

  return (
    <View style={styles.list}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={props.listData}
        renderItem={renderMealItem}
        style={{ width: '100%' }}
      />
    </View>
  )
}

export default MealList

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  }
})
