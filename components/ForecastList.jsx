/* eslint-disable react/prop-types */
import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';

const ForecastList = ({ forecast }) => {
  const getDate = (time) => {
    var date = new Date(time * 1000 + forecast.city.timezone * 1000);
    const day = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'][date.getDay()];
    var result =
      (date.getDate() < 10 ? '0' : '') +
      date.getDate() +
      '.' +
      (date.getDate() + 1 < 10 ? '0' : '') +
      (date.getMonth() + 1) +
      ' ' +
      day;

    return result;
  };

  const getHoursMinutes = (time) => {
    var date = new Date(time * 1000 + forecast.city.timezone * 1000);
    var result =
      (date.getHours() < 10 ? '0' : '') +
      date.getHours() +
      ':' +
      (date.getMinutes() < 10 ? '0' : '') +
      date.getMinutes();

    return result;
  };

  const getTemp = (temp) => {
    return (temp > 0 ? '+' : '') + Math.round(temp) + '°C';
  };

  return (
    <View style={styles.backContainer}>
      <Text style={styles.text}>Прогноз на 5 дней в городе</Text>
      <Text style={styles.cityName}>{forecast.city.name}</Text>
      <ScrollView style={styles.container}>
        {forecast.list.map((dayInfo, index) => {
          if (index % 8 === 0)
            return (
              <View key={index} style={styles.day}>
                <Text style={styles.dateTxt}>{getDate(dayInfo.dt)}</Text>
                <View style={styles.hour}>
                  <Text style={styles.timeTxt}>{getHoursMinutes(forecast.list[index].dt)}</Text>
                  <Text style={styles.tempTxt}>{getTemp(forecast.list[index].main.temp)}</Text>
                  <Image
                    style={styles.image}
                    source={{
                      uri: `https://openweathermap.org/img/wn/${forecast.list[index].weather[0].icon}@2x.png`,
                    }}
                  />
                </View>
                <View style={styles.hour}>
                  <Text style={styles.timeTxt}>{getHoursMinutes(forecast.list[index + 3].dt)}</Text>
                  <Text style={styles.tempTxt}>{getTemp(forecast.list[index + 3].main.temp)}</Text>
                  <Image
                    style={styles.image}
                    source={{
                      uri: `https://openweathermap.org/img/wn/${
                        forecast.list[index + 3].weather[0].icon
                      }@2x.png`,
                    }}
                  />
                </View>
              </View>
            );
          else return null;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backContainer: {
    height: '100%',
    paddingBottom: 120,
  },
  container: {
    flex: 1,
  },
  text: {
    color: '#1B1D1E',
    fontSize: 20,
    paddingLeft: 10,
  },
  cityName: {
    color: '#1B1D1E',
    fontSize: 30,
    paddingLeft: 10,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderColor: '#1B1D1E',
  },
  day: {
    borderBottomWidth: 1,
    borderColor: '#fff',
    marginTop: 10,
  },
  hour: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  dateTxt: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  timeTxt: {
    color: '#fff',
    fontSize: 16,
  },
  tempTxt: {
    color: '#fff',
    fontSize: 16,
  },
  image: {
    width: 65,
    height: 65,
  },
});

export default ForecastList;
