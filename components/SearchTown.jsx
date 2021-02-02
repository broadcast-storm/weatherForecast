import React from 'react';
import { TextInput, StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// eslint-disable-next-line react/prop-types
const SearchTown = ({ changeCity }) => {
  const [value, onChangeText] = React.useState('');

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Другой город"
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (value.trim() !== '') changeCity(value.trim());
        }}>
        <Icon name="cloud-search-outline" size={30} color={'#1B1D1E'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: '#1B1D1E',
    borderBottomWidth: 2,
    color: '#1B1D1E',
    marginBottom: 10,
  },
  btn: {
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchTown;
