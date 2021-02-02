/* eslint-disable react/prop-types */
import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const ForecastList = ({ forecast }) => {
  return (
    <View style={styles.backContainer}>
      <ScrollView style={styles.container}>
        {forecast.list.map((dayInfo, index) => {
          return (
            <View key={index}>
              <Text>Температура: {dayInfo.main.temp}</Text>
              <Text>Ощущается: {dayInfo.main.feels_like}</Text>
              <Text>Влажность: {dayInfo.main.humidity}</Text>
              <Text>Погода: {forecast.list.length}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backContainer: {
    height: '100%',
  },
  container: {
    flex: 1,
  },
});

export default ForecastList;
