import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { DATA } from "./data";

const RenderInnerItem = ({ item }) => {
  return (
    <View style={styles.innerItemContainer}>
      <View style={styles.content}>
        <Text>{item.name}</Text>
      </View>
    </View>
  );
};

const RenderItem = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.header}>
        <Text>{item.title}</Text>
      </View>
      <FlatList
        data={item.innerArray}
        keyExtractor={(item) => item.id}
        renderItem={RenderInnerItem}
      />
    </View>
  );
};

const SectionList = () => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={RenderItem}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "rgba(200,200,200,1)",
  },
  header: {
    backgroundColor: "rgba(100,100,100,1)",
  },
  innerItemContainer: {},
});

export default SectionList;
