import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function TestScreen() {


    return (
      <View style={styles.container}>
        <Text>This is TestScreen</Text>
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
  