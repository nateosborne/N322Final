import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput, Button, List } from "react-native-paper";
import { Auth } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

export default function DetailScreen({ navigation }) {
  const signUserOut = () => {
    try {
      signOut(auth)
        .then(() => {
          console.log("signed out");
          navigation.navigate("home");
        })
        .catch((error) => {
          setLoading(false);
          Alert.alert(error.message);
          console.log("error ", error.message);
        });
    } catch (error) {
      console.log("try error ", error.message);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>You have signed in!</Text>

      <Button
        style={styles.button}
        onPress={() => {
          navigation.navigate("home");
        }}
      >
        Home
      </Button>

      <Button onPress={signUserOut}>Sign Out</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  header: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 50,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
});
