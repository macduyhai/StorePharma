import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import CategoryListItem from "../components/CategoryListitem";

export default class Category extends React.Component {
  render() {
    const { categories } = this.state;
    return <View>Category</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
