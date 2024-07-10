import { View, Text, StyleSheet } from 'react-native';

import Avatar from '../components/Avatar';

export default function Post() {
    return (
        <View style={styles.container}>
            <Avatar source='https://photojournal.jpl.nasa.gov/jpegMod/PIA00104_modest.jpg'></Avatar>
            <View style={styles.text}>
                <Text>Name</Text>
                <Text>Time · Icon</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        flexDirection: 'column',
    }
});