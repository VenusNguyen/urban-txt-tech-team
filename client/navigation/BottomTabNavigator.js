import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { StyleSheet, Pressable } from 'react-native';
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import Test from '../screens/Test';

const Tab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {


    return (
        <Tab.Navigator
            initialRouteName={INITIAL_ROUTE_NAME}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Home",
                    tabBarIcon: ({ focused }) => (
                      <TabBarIcon focused={focused} name="home-outline" />
                    ),
                    headerLeft: () => (
                        <Pressable
                            onPress={() => {
                                navigation.navigate("Profile");
                            }}
                        >
                            <Ionicons
                                name={"person-circle-outline"}
                                size={40}
                                style={{ marginLeft: 5 }}
                                color={Colors.darkgray}
                            />
                        </Pressable>
                    ),
                }}
            />
            <Tab.Screen
                name="Test"
                component={Test}
                options={{
                    title: "Test",
                    tabBarIcon: ({ focused }) => (
                      <TabBarIcon focused={focused} name="accessibility-outline" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? INITIAL_ROUTE_NAME;
  
    switch (routeName) {
        case "Home":
            return "Home";
        case "Test":
            return "Test";
    }
  }

const style = StyleSheet.create({
    tab: {
        backgroundColor: "black",
    },
});