import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

import { signOut } from '@firebase/auth';
import { auth } from '../../firebase';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {

    const [displayName, setDisplayName] = useState<string | null>('');
    const router = useRouter();
    
    const onPressLogout = async () => {
      try {
        await signOut(auth)
            .then(logout_Success, logout_Failed);
    } catch (error: any) {
        console.log('Signout failed: ' + error.message);
    }
    }

    useEffect( () => {
        if (auth.currentUser) {
            setDisplayName(auth.currentUser.displayName);
        }
    });

    const logout_Success = () => {
        console.log("User signed out successfully!");
        router.replace('/login');
    };

    const logout_Failed = () => {
        alert("Signout failure. Please try again.");
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/venus.jpeg')}
                style={{ width: 170,
                         height: 170,
                         borderRadius: 85,
                         marginTop: 20,
                        }}
            />
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