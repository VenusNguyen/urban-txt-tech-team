import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Redirect, useNavigation, useRouter } from 'expo-router';


export default function Home() {

    return (
        <Redirect href={'/login'}></Redirect>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
