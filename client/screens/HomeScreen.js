import React from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native';

import { getAuth, signOut } from '@firebase/auth';
import { app } from "../firebaseConfig";
import { Link } from "expo-router";

export default function HomeScreen() {

  const auth = getAuth();
  const onPressLogout = async () => {
    await signOut(auth);
  }

  const userName = auth.currentUser.displayName

    return (
      <View style={styles.container}>
        <Text>This is HomeScreen</Text>

        <Pressable
          style={[styles.buttonContainer, styles.logoutButton]}
          onPress={onPressLogout}
        >
          <Text style={styles.loginText}>Logout</Text>
        </Pressable>

        <Text>Welcome {userName} !!!</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
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
    logoutButton: {
      backgroundColor: "blue",
    },
  });
  