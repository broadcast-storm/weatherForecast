/* eslint-disable react/prop-types */
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StyleSheet, Image } from 'react-native';

const TodayWeather = ({ weatherInfo }) => {
  const getTime = () => {
    var date = new Date(weatherInfo.dt * 1000 + weatherInfo.timezone * 1000);
    const day = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'][date.getDay()];
    var result =
      (date.getDate() < 10 ? '0' : '') +
      date.getDate() +
      '.' +
      (date.getDate() + 1 < 10 ? '0' : '') +
      (date.getMonth() + 1) +
      '.' +
      (date.getFullYear() % 100) +
      ' ' +
      (date.getHours() < 10 ? '0' : '') +
      date.getHours() +
      ':' +
      (date.getMinutes() < 10 ? '0' : '') +
      date.getMinutes() +
      ' ' +
      day;

    return result;
  };

  const getHoursMinutes = (time) => {
    var date = new Date(time * 1000 + weatherInfo.timezone * 1000);
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

  const upperCaseFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  };

  return (
    <View style={styles.backContainer}>
      <View style={styles.container}>
        <View style={styles.townInfo}>
          <Text style={styles.cityName}>{weatherInfo.name}</Text>
          <Text style={styles.time}> {getTime()}</Text>
        </View>
        <View style={styles.mainBlock}>
          <View>
            <Text style={styles.mainDescr}>
              {upperCaseFirstLetter(weatherInfo.weather[0].description)}
            </Text>
            <Text style={styles.mainTemp}>{getTemp(weatherInfo.main.temp)}</Text>
            <View>
              <Text style={styles.feelsLike}>Ощущается {getTemp(weatherInfo.main.feels_like)}</Text>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: `https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`,
              }}
            />
          </View>
        </View>
        <View style={styles.infoBlock}>
          <View style={styles.infoBlockRow}>
            <View style={styles.infoRec}>
              <Icon name="weather-sunset-up" size={40} color={'#EC6E4C'} style={styles.infoIcon} />
              <Text style={styles.infoName}>Рассвет</Text>
              <Text style={styles.infoResult}>{getHoursMinutes(weatherInfo.sys.sunrise)}</Text>
            </View>
            <View style={styles.infoRec}>
              <Icon
                name="weather-sunset-down"
                size={40}
                color={'#EC6E4C'}
                style={styles.infoIcon}
              />
              <Text style={styles.infoName}>Закат</Text>
              <Text style={styles.infoResult}>{getHoursMinutes(weatherInfo.sys.sunset)}</Text>
            </View>
            <View style={styles.infoRec}>
              <Icon name="weather-windy" size={40} color={'#EC6E4C'} style={styles.infoIcon} />
              <Text style={styles.infoName}>Ветер</Text>
              <Text style={styles.infoResult}>{weatherInfo.wind.speed} м/с</Text>
            </View>
          </View>
          <View style={styles.infoBlockRow}>
            <View style={styles.infoRec}>
              <Icon name="altimeter" size={40} color={'#EC6E4C'} style={styles.infoIcon} />
              <Text style={styles.infoName}>Давление</Text>
              <Text style={styles.infoResult}>{weatherInfo.main.pressure} мм</Text>
            </View>
            <View style={styles.infoRec}>
              <Icon name="water-percent" size={40} color={'#EC6E4C'} style={styles.infoIcon} />
              <Text style={styles.infoName}>Влажность</Text>
              <Text style={styles.infoResult}>{weatherInfo.main.humidity}%</Text>
            </View>
            <View style={styles.infoRec}>
              <Icon name="cloud-outline" size={40} color={'#EC6E4C'} style={styles.infoIcon} />
              <Text style={styles.infoName}>Облачность</Text>
              <Text style={styles.infoResult}>{weatherInfo.clouds.all}%</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backContainer: {
    height: '100%',
  },
  container: {
    // height: '100%',
    flex: 1,
  },
  townInfo: {
    // height: 70,
    flex: 1,
  },
  cityName: {
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
  },
  time: {
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',
  },
  mainBlock: {
    // height: 200,
    flex: 10,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  mainDescr: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
  },
  mainTemp: {
    fontSize: 60,
    color: '#fff',
  },
  feelsLike: {
    color: '#fff',
  },
  infoBlock: {
    // height: 240,
    flex: 15,
  },
  infoBlockRow: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoRec: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: '#1B1D1E',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  infoIcon: {
    width: 40,
    height: 40,
  },
  infoName: {
    color: '#fff',
  },
  infoResult: {
    color: '#fff',
  },
  imageContainer: {
    width: 150,
    height: 150,
    position: 'relative',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default TodayWeather;
