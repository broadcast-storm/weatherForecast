import React, { useEffect, useState } from 'react';
import TodayWeather from '../components/TodayWeather';
import Error from '../components/Error';
import { SafeAreaView, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';
import SearchTown from '../components/SearchTown';

// Прогноз на 5 дней
// https://api.openweathermap.org/data/2.5/forecast?q=Moscow&lang=ru&units=metric&appid=132b73fb04b439ec404879180563287a

// Погода сейчас
// https://api.openweathermap.org/data/2.5/weather?q=Moscow&lang=ru&units=metric&appid=132b73fb04b439ec404879180563287a

const TodayScreen = () => {
  const [forecast, setForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(
        'https://api.openweathermap.org/data/2.5/weather?q=Брянск&lang=ru&units=metric&appid=132b73fb04b439ec404879180563287a'
      );
      setForecast(result.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <LinearGradient colors={['#C13B00', '#1B1D1E']} style={styles.linearGradient}>
      <SafeAreaView style={isLoading || isError ? styles.loadingContainer : null}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#EC6E4C" />
        ) : isError ? (
          <Error />
        ) : (
          <>
            <SearchTown />
            <TodayWeather weatherInfo={forecast} />
          </>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default TodayScreen;
