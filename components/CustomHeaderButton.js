import React from 'react'
import { StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButton, } from 'react-navigation-header-buttons';

import Colors from '../constants/Color';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
    />
  )
}

export default CustomHeaderButton

const styles = StyleSheet.create({})
