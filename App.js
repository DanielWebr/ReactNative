import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/header';
import MoviesList from './components/moviesList';

export default function App() {

  return (
    <View style={styles.container}>
      <Header/>
      <MoviesList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});