import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { vs, s } from "react-native-size-matters";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const HomeScreenHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/yogaProfile.png")}
        style={styles.profilePhoto}
      />
      <TextInput style={styles.searchField} 
        placeholder="Search Meditation"
        placeholderTextColor="#575454"
        >
      </TextInput>
    </View>
  );
};

export default HomeScreenHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: vs(54),
    gap: s(20)
  },
  profilePhoto: {
    height: vs(50),
    width: s(55),
    backgroundColor: "#fff",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  searchField: {
    height: vs(50),
    width: s(220),
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    color: "#737070",
    backgroundColor: "#333131",
    fontSize: 16
  }
});
