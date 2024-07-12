import { View, StyleSheet } from 'react-native';

// import { Card } from '@rneui/themed';
import PostHeader from './PostHeader';

export default function Post() {
    return (
        <View style={styles.container}>
            <PostHeader/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'left',
        justifyContent: 'left',
    },
});