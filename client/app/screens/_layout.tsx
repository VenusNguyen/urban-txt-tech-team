import { StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="profile"
        options={{
          title: "Your Profile",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="test"
        options={{
          title: "Test Screen",
        }}
      />
    </Stack>
  )
}

const styles = StyleSheet.create({})