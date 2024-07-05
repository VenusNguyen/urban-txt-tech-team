import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable
  } from "react-native";
  
import React, { useState } from "react";
import Colors from "../constants/Colors";

// import firebase from "@firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseConfig";

export default function LoginScreen({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth(app);

    const onPressLogin = async () => {
      try {
        await signInWithEmailAndPassword(auth, email, password)
              .then(login_Success, login_Failed)
      } catch (error) {
        alert('Authentication error:', error.message);
      }
    };

    const login_Success = () => {
        console.log("User signed in successfully!");
    };

    const login_Failed = () => {
        alert("Login failure. Please try again.");
    };

    return (
        <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            inputMode="email-address"
            onChangeText={setEmail}
          />
        </View>
  
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={setPassword}
          />
        </View>

        <Pressable
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={onPressLogin}
        >
          <Text style={styles.loginText}>Login</Text>
        </Pressable>
          
        <Pressable
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate('Register')
          }}
        >
          <Text style={styles.btnText}>Register</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: Colors.lightgray,
      alignItems: "center",
      paddingBottom: 100,
    },
    imageContainer: {
      width: 300,
      height: 45,
      marginBottom: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    inputContainer: {
      borderBottomColor: "#F5FCFF",
      backgroundColor: "#FFFFFF",
      borderBottomWidth: 1,
      width: 300,
      height: 45,
      marginBottom: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    inputs: {
      height: 45,
      marginLeft: 16,
      borderBottomColor: "#FFFFFF",
      flex: 1,
    },
    buttonContainer: {
      height: 45,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
      width: 300,
      borderRadius: 30,
      backgroundColor: "transparent",
    },
    loginButton: {
      backgroundColor: "blue",
    },
    loginText: {
      color: "white",
      fontWeight: "bold",
    },
    btnText: {
      color: "black",
      fontWeight: "bold",
    },
  });