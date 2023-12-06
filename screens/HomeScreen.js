import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { TextInput, Button, List } from "react-native-paper";
import { auth } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function HomeScreen({ navigation }) {
  const [signInEmailAddress, setSignInEmailAddress] = useState();
  const [signInPW, setSignInPW] = useState();
  const [userFirstName, setUserFirstName] = useState();
  const [userLastName, setUserLastName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPW, setUserPW] = useState();
  const [loading, setLoading] = useState(false);

  const signInUser = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, signInEmailAddress, signInPW)
        .then((userCredential) => {
          console.log("user created");
          setSignInEmailAddress("");
          setSignInPW("");
          setLoading(false);
          navigation.navigate("detail");
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

  const createUser = async () => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, userEmail, userPW)
        .then((userCredential) => {
          console.log("user created");
          setUserFirstName("");
          setUserLastName("");
          setUserEmail("");
          setUserPW("");
          setLoading(false);
          navigation.navigate("detail");
        })
        .catch((error) => {
          console.log("error ", error.message);
        });
    } catch (error) {
      console.log("try error ", error.message);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View>
            <View style={styles.headerContainer}>
              <Text style={styles.smallHeader}>Sign In</Text>
            </View>
            <TextInput
              style={styles.input}
              label="User Name"
              onChangeText={setSignInEmailAddress}
              value={signInEmailAddress}
            />
            <TextInput
              style={styles.input}
              label="User Password"
              onChangeText={setSignInPW}
              value={signInPW}
            />
            <View style={styles.buttoncontainer}>
              <Button
                style={styles.button}
                title="Sign In"
                onPress={signInUser}
                mode="contained"
              >
                Sign In
              </Button>
            </View>
          </View>
          <View>
            <View style={styles.headerContainer}>
              <Text style={styles.smallHeader}>Create Account</Text>
            </View>
            <TextInput
              style={styles.input}
              label="First Name"
              onChangeText={setUserFirstName}
              value={userFirstName}
            />
            <TextInput
              style={styles.input}
              label="Last Name"
              onChangeText={setUserLastName}
              value={userLastName}
            />
            <TextInput
              style={styles.input}
              label="User Email"
              onChangeText={setUserEmail}
              value={userEmail}
            />
            <TextInput
              style={styles.input}
              secureTextEntry={true}
              label="User Password"
              onChangeText={setUserPW}
              value={userPW}
            />
            <View style={styles.buttoncontainer}>
              <Button
                style={styles.button2}
                title="Sign In"
                onPress={createUser}
                mode="contained"
              >
                Create Account
              </Button>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    padding: 50,
    paddingTop: 70,
  },
  headerContainer: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 24,
  },
  smallHeader: {
    fontWeight: "bold",
    fontSize: 30,
  },
  input: {
    marginTop: 10,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: "white",
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
    width: "30%",
    backgroundColor: "#4a6c8a",
  },
  buttoncontainer: {
    flex: 0,
    alignItems: "center",
  },
  button2: {
    marginTop: 20,
    marginBottom: 20,
    width: "50%",
    backgroundColor: "#4a6c8a",
  },
});
