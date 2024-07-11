import { View, Text, StyleSheet } from 'react-native';

export default function Post() {
    return (
        <View style={styles.container}>
            {/* <View style={styles.text}> */}
                <Text>Name</Text>
                <Text>Time · Icon</Text>
            {/* </View> */}
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