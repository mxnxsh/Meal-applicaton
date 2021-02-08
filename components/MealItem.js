import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

const MealItem = props => {
  let TouchableComponent = TouchableOpacity
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback
  }
  return (
    <View style={styles.mealItem}>
      <TouchableComponent
        onPress={props.onSelectMeal}

      >
        <View >
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImg}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            {/* we can use same style name at a time */}
            {/* <View style={styles.mealRow}> */}
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableComponent>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#dae4ee',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%'
  },
  bgImg: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 20,
    color: 'white',

    textAlign: 'center'
  }
})
