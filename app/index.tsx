import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Edit app/index.tsx to edit this screen.</Text>
      <Text style={styles.textColor}>Newer Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    justifyContent: "center",
    alignItems: "center"
  },
  textColor: {
    color: "white"
  }
})
