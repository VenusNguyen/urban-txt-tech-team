import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from './firebaseConfig';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Test from './screens/Test'
import Colors from './constants/Colors';
import SignupScreen from './screens/SignupScreen';

const Stack = createStackNavigator();

export default function App() {

  const auth = getAuth(app);

  const [isSignedIn, setIsSignedIn] = useState(
    auth.currentUser ? true : false
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsSignedIn(user ? true : false);
    });
  });

  return (

    <ActionSheetProvider>

        <NavigationContainer>
          <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Group>

              <Stack.Screen name='HomeScreen' component={HomeScreen}/>
              <Stack.Screen name='Test' component={Test} />

              </Stack.Group>
            </>
            ) : (
              <>
                <Stack.Group >

                <Stack.Screen name='Login' component={LoginScreen}/>
                <Stack.Screen name='Register' component={SignupScreen}/>

                </Stack.Group>
              </>
              
            )
          }
          </Stack.Navigator>
          <StatusBar style="auto"/>
        </NavigationContainer>

    </ActionSheetProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.lightgray,
  },
});
