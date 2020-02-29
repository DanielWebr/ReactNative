import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { Movie } from "./Movie";

export default function MovieItem(movie) {
  console.log("\n\n\n");
  let uri =
    "https://raw.githubusercontent.com/RyanHemrick/star_wars_movie_app/master/public/images/" +
    movie.poster;
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{ uri: uri }} />
      <View style={styles.tytleView}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.titleNumber}>{movie.episodeNumber}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginTop: 16,
    paddingRight: 30,
    borderColor: "#bbb",
    borderRadius: 15,
    backgroundColor: "#FDE5B9",
    flexDirection: "row"
  },
  image: {
    height: 145,
    width: 112,
    opacity: 1,
    borderRadius: 15,
    marginRight: 10,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0
  },
  title: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 19
  },
  titleNumber: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 50,
    color: "#555"
  },
  tytleView: {
    flex: 1
  }
});
