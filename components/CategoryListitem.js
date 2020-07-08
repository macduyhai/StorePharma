import React from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import MedicineImage from "../assets/medicine.png";
export default function CategoryListItem(props) {
  const { category } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        Alert.alert("Click!");
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}> {category.name}</Text>
        <Image style={styles.categoryImage} source={MedicineImage} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#FFFF",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 0 },
    marginBottom: 16,
  },
  categoryImage: {
    width: 64,
    height: 64,
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontWeight: "700",
  },
});
