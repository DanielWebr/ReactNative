import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Movies</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 92,
    paddingTop: 45,
    backgroundColor: "#222"
  },
  title: {
    textAlign: "center",
    color: "#f5da89",
    fontSize: 33,
    fontWeight: "bold"
  }
});
