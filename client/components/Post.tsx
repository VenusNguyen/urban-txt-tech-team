import { Colors } from '@/constants/Colors';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Post() {
    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <Image
                    source={require('../assets/images/venus.jpeg')}
                    style={styles.avatar}
                />
                <View style={styles.headerText}>
                    <Text>Name</Text>
                    <Text>Time · Icon</Text>
                </View>
                <Entypo
                        name={"dots-three-vertical"}
                        size={25}
                        style={styles.leftIcon}
                        color={'gray'}
                />
            </View>

            <View style={styles.bodyContainer}>
                <Text style={styles.bodyText}>
                    Earth is the third planet from the Sun and the only astronomical
                    object known to harbor life. This is enabled by Earth being an ocean
                    world, the only one in the Solar System sustaining liquid surface
                    water. Almost all of Earth's water is contained in its global ocean,
                    covering 70.8% of Earth's crust.</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: 'row',
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        marginTop: 5,
    },
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 50,
        backgroundColor: Colors.darkgray,
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 17,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 8,
    },
    leftIcon: {
        marginLeft: '66%',
        marginTop: 12,
    },
    headerText: {
        flexDirection: 'column',
        marginLeft: 5,
        marginTop: 8,
    },
    bodyContainer: {
        width: '100%',
        // height: 100,
        backgroundColor: 'gray',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
    },
    bodyText: {
        margin: 10,
    },
});