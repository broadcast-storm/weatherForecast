import React, { useState, useEffect } from 'react';
import Error from '../components/Error';
import ForecastList from '../components/ForecastList';
import SearchTown from '../components/SearchTown';
import { SafeAreaView, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

const FiveDaysScreen = () => {
  const [forecast, setForecast] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(
        'https://api.openweathermap.org/data/2.5/forecast?q=Moscow&lang=ru&units=metric&appid=132b73fb04b439ec404879180563287a'
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
      <SafeAreaView style={isLoading ? styles.loadingContainer : null}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#EC6E4C" />
        ) : isError ? (
          <Error />
        ) : (
          <>
            <SearchTown />
            <ForecastList forecast={forecast} />
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

export default FiveDaysScreen;
