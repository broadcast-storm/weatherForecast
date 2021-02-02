import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Error = () => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.text}>Ошибка подключения к интернету</Text>
      <Button title="Попробовать еще раз" onPress={() => {}} style={styles.btn} color={'#EC6E4C'} />
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
    marginBottom: 10,
  },
});

export default Error;
