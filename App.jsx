/* eslint-disable react/no-children-prop */
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TodayScreen from './screens/TodayScreen';
import FiveDaysScreen from './screens/FiveDaysScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const [cityName, setCityName] = useState('Москва');
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#EC6E4C',
          inactiveTintColor: '#fff',
          style: {
            backgroundColor: '#1B1D1E',
            height: 60,
          },
        }}
        screenOptions={({ route }) => ({
          // eslint-disable-next-line react/display-name, react/prop-types
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === 'Today') {
              iconName = 'weather-partly-cloudy';
            } else if (route.name === 'FiveDays') {
              iconName = 'format-list-bulleted';
            }
            return <Icon name={iconName} size={35} color={color} />;
          },
        })}>
        <Tab.Screen
          name="Today"
          children={() => <TodayScreen city={cityName} changeCity={setCityName} />}
          options={{ title: 'На сегодня' }}
        />
        <Tab.Screen
          name="FiveDays"
          children={() => <FiveDaysScreen city={cityName} changeCity={setCityName} />}
          options={{ title: 'На 5 дней' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
