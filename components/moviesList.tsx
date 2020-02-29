import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  ListRenderItemInfo
} from "react-native";
import MovieItem from "./movieItem";
import { Movie } from "./Movie";

const sorting = {
  asc: "Descending sort",
  desc: "Ascending sort"
};

export default function MoviesList() {
  const [isLoading, setLoading] = useState(true);
  const [sort, setSort] = useState("asc");
  const [movies, setMovies] = useState(Array<Movie>());

  useEffect(() => {
    let url =
      "https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/movies.json";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        setLoading(false);
        let movies: Array<Movie> = responseJson.movies.map(movie =>
          itemToMovie(movie)
        );
        setMovies(movies);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const reverseMoviesArray = (): void => {
    setSort(sort == "asc" ? "desc" : "asc");
    setMovies(movies.slice().reverse());
  };

  const movieToMovieItem = (movie: ListRenderItemInfo<Movie>): JSX.Element => {
    return (
      <MovieItem
        title={movie.item.title}
        description={movie.item.description}
        episodeNumber={movie.item.episodeNumber}
        mainCharacters={movie.item.mainCharacters}
        heroImage={movie.item.heroImage}
        poster={movie.item.poster}
      />
    );
  };

  const itemToMovie = (movieItem): Movie => {
    return new Movie(
      movieItem.title,
      movieItem.episode_number,
      movieItem.main_characters,
      movieItem.description,
      movieItem.poster,
      movieItem.hero_image
    );
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
        renderItem={movieToMovieItem}
        keyExtractor={movie => movie.episodeNumber.toString()}
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
