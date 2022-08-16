import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Main() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={() => {
          console.log("start location");
        }}>
        <View style={styles.button}>
          <Text style={styles.butttonText}>Location</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "blue",
    padding: 15,
    color: "red",
  },
  buttonText: {
    fontSize: "12",
  },
});
