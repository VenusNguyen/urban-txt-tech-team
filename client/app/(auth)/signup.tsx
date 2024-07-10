import {
    Text,
    View,
    TextInput,
    Pressable,
    StyleSheet,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "expo-router";

import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { auth } from "../../firebase";

export default function SignupScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ title: "Register" });
    }, [navigation]);

    const onPressCreate = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
            .then(onSuccess, onFailure)
    };

    const onSuccess = () => {
        console.log("User created successfully!");
        if (auth.currentUser) {
            updateProfile(auth.currentUser, { displayName: name })
                .then(function () {
                    console.log("User info successfully updated!");
                }, function (error) {
                    console.error("Error updating user info: ", error);
                });
        }
    };

    const onFailure = () => {
        alert("Sign up failure. Please try again.");
    };

    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Welcome to App</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputs}
                    placeholder="Name"
                    onChangeText={setName}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.inputs}
                    placeholder="Password (6+ characters)"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />
            </View>

            <Pressable
                style={[styles.buttonContainer, styles.signupButton]}
                onPress={onPressCreate}
            >
                <Text style={styles.signupText}>Sign up</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingTop: 180,
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
    signupButton: {
        backgroundColor: "blue",
    },
    signupText: {
        color: "white",
        fontWeight: "bold",
    },
    headerText: {
        fontWeight: "bold",
        fontSize: 28,
    },
    headerContainer: {
        width: 300,
        height: 45,
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});