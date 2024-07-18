import { View, StyleSheet, Text } from 'react-native';

export default function CameraScreen(){
    return(

        <View style={styles.container}>
            <Text>This is CameraScreen</Text>
        </View>
    
)}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});