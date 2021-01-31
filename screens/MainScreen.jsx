import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView } from 'react-native';
import axios from 'axios';

const MainScreen = () => {
  const [test, setTest] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setTest(result.data);
    }
    fetchData();
  }, []);

  return (
    <SafeAreaView>
      <Text>Главный экран</Text>
      <Text>{test === null ? '' : JSON.stringify(test)}</Text>
    </SafeAreaView>
  );
};

export default MainScreen;
