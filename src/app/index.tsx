import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [dogBreed, setBreed] = useState([
    { breed: "Border Collie", id: "1" },
    { breed: "West Highland", id: "2" },
    { breed: "Hskey", id: "3" },
    { breed: "Akita Inu", id: "4" },
    { breed: "Coton de Tuléar", id: "5" },
    { breed: "Doberman ", id: "6" },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}                            // item refering to line 6-11, each line is a item
        data={dogBreed}
        renderItem={({ item }) => (
          <View style={styles.breedRows}>
            <Text style={styles.breedText}>{item.breed}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 32,
  },
  breedRows: {
    width: '100%',
    backgroundColor: "#ebbd05",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e6e0d6",
  },
  breedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
