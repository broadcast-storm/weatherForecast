import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CityError = () => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.text}>Город не найден. Попробуйте еще раз</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    width: '100%',
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default CityError;
