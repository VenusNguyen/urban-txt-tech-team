import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import Test from './screens/Test'
import Colors from './constants/Colors';
import SignupScreen from './screens/SignupScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
        {isSignedIn? (
          <>
          {/* <NavigationContainer> */}
            <Stack.Group>

            <Stack.Screen name='Test' component={Test} />
            <Stack.Screen name='HomeScreen' component={HomeScreen}/>

            </Stack.Group>
          {/* </NavigationContainer> */}
          </>
          ) : (
            <>
            {/* <LoginScreen></LoginScreen> */}
            {/* <NavigationContainer> */}
              <Stack.Group screenOptions={{ headerShown: false }}>

              <Stack.Screen name='Login' component={LoginScreen}/>
              <Stack.Screen name='Signup' component={SignupScreen}/>

              </Stack.Group>
            {/* </NavigationContainer> */}
            </>
            
          )
        }
        </Stack.Navigator>
        <StatusBar style="auto"/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.snapgray,
  },
});
