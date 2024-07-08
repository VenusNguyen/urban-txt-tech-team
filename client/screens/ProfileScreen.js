import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

import { getAuth, signOut } from '@firebase/auth';
import Colors from '../constants/Colors';
import Avatar from '../components/Avatar';

export default function ProfileScreen() {

    const [displayName, setDisplayName] = useState('');
    
    const auth = getAuth();
    const onPressLogout = async () => {
      await signOut(auth);
    }

    useEffect( () => {
        setDisplayName(auth.currentUser.displayName);
    });

    return (
        <View style={styles.container}>

            <Avatar placeholderImageSource={require('../assets/Venus.webp')} size={170} radius={85}/>
            <Text style={styles.displayName}>{displayName}</Text>
            <Text>
                Venus is the second planet from the Sun. It is a terrestrial planet
                and is the closest in mass and size to its orbital neighbour Earth.
                Venus is notable for having the densest atmosphere of the terrestrial
                planets, composed mostly of carbon dioxide with a thick, global sulfuric
                acid cloud cover.
            </Text>
            <View style={styles.Row}>
                <Pressable
                style={[styles.buttonContainer, styles.logoutButton]}
                onPress={onPressLogout}
                >
                    <Text style={styles.logoutText}>Logout</Text>
                </Pressable>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "white",
    },
    userImage: {
        borderColor: Colors.tintColor,
        marginBottom: 15,
    },
    displayName: {
        fontSize: 35,
    },
    Row: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    buttonContainer: {
        height: 45,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        width: 300,
        borderRadius: 30,
        backgroundColor: "transparent",
    },
    logoutButton: {
        backgroundColor: "blue",
    },
    logoutText: {
        color: "white",
        fontWeight: "bold",
    },
  });