import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CategoryListItem from "../components/CategoryListitem";

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { id: 1, name: "Dược phẩm 111" },
        { id: 2, name: "Thực phẩm chăm sóc sức khỏe " },
        { id: 3, name: "Mỹ phẩm " },
        { id: 4, name: "Thiết bị y tế" },
        { id: 5, name: "Sản phẩm khác" },
      ],
    };
  }
  render() {
    const { categories } = this.state;
    return (
      <View>
        {/* <ScrollView style={{ paddingLeft: 16, paddingRight: 16 }}> */}
        {/* {categories.map((category) => (
            <CategoryListItem key={category.id} category={category} />
          ))} */}
        <FlatList
          data={categories}
          renderItem={({ item }) => <CategoryListItem category={item} />}
          keyExtractor={(item) => `${item.key}`}
          contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
        />
        {/* </ScrollView> */}
      </View>
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
