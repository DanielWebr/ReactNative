import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import MovieItem from "./movieItem";

const sorting = {
  asc: "Descending sort",
  desc: "Ascending sort"
};

export default function MoviesList() {
  console.log("jds1");
  const [isLoading, setLoading] = useState(true);
  const [sort, setSort] = useState("asc");
  const [movies, setMovies] = useState("");



  useEffect(() => {
    console.log("jds");
    let url =
      "https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        setLoading(false);
        setMovies(responseJson.movies);
      })
      .catch(error => {
        console.error(error);
      });
  },[]);

  const reverseMoviesArray = () => {
    setSort(sort == "asc" ? "desc" : "asc");
    setMovies(movies.slice().reverse());
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ marginLeft: 10, marginRight: 10 }}
        data={movies}
        renderItem={({ item }) => <MovieItem movie={item} />}
        keyExtractor={item => {
          return item.episode_number;
        }}
      />

      <TouchableOpacity style={styles.button} onPress={reverseMoviesArray}>
        <Text style={styles.buttonText}> {sorting[sort]} </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#777",
    padding: 15
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f5da89"
  }
});
