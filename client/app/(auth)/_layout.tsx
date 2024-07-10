import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
          title: "Login",
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
            title: "Register",
        }}
      />
    </Stack>
  )
}

const styles = StyleSheet.create({})