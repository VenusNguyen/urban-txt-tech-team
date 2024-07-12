import { Text, View, StyleSheet } from 'react-native';
import Avatar from './Avatar';

export default function PostHeader() {
    return (
        <View style={styles.container}>
            <Avatar placeholderImageSource={require('../assets/Venus Planet.jpeg')} size={50} radius={50}/>
            <Text>Name</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'left',
        justifyContent: 'left',
    },
});