import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";

export default class App extends React.Component {
  render() {
    return (
      // <View>
      //   <Text> Hello 111</Text>
      //   {/* <AppNavigator /> */}
      // </View>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    );
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
