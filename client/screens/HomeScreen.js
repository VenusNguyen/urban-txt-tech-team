import React from "react";
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {


    return (
      <View style={styles.container}>
        <Text>This is HomeScreen</Text>

        

      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  