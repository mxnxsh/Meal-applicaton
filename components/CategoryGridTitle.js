import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

const CategoryGridTitle = props => {
  let TouchableComponent = TouchableOpacity
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback
  }
  return (
    <View style={styles.gridItem}>
      <TouchableComponent
        style={{ flex: 1 }}
        onPress={props.onSelect}
      >
        <View style={
          {
            ...styles.container,
            ...{ backgroundColor: props.color }
          }}
        >
          <Text style={styles.title} numberOfLines={2} >{props.title}</Text>
        </View>
      </TouchableComponent>
    </View>
  )
}

export default CategoryGridTitle

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'right'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: 'hidden'
  }
})