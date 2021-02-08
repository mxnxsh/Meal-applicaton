import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavoritesScreen from '../screens/FavoritesScreen'
import Colors from '../constants/Color';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: CategoryMealsScreen,
  MealDetail: MealDetailsScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  }
})

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons
          name='ios-restaurant'
          size={25}
          color={tabInfo.tintColor}
        />
      }
    }
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons
          name='ios-star'
          size={25}
          color={tabInfo.tintColor}
        />
      }
    }
  }
}

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
      activeTintColor: Colors.accentColor,
      shifting: true
    })
    : createBottomTabNavigator(tabScreenConfig, {
      tabBarOptions: {
        activeTintColor: Colors.accentColor
      }
    })

export default createAppContainer(MealsFavTabNavigator) 