import { View, StyleSheet, Text } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';

const LOS_ANGELES_REGION = {
    latitude: 34.0522,
    longitude: -118.2437,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
};

export default function MapScreen(){

    const [location, setLocation] = useState<Location.LocationObjectCoords | null>();
    const [errorMsg, setErrorMsg] = useState('');
    const mapView = useRef();

    // const goToCurrLocation = () => {
    //     mapView?.current.animateToRegion(
    //       {
    //         latitude: location?.latitude,
    //         longitude: location?.longitude,
    //         latitudeDelta: 0.0922,
    //         longitudeDelta: 0.0421,
    //       },
    //       1000,
    //     );
    //   };

    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location.coords);
        })();
      }, []);

    return(
        <MapView style={styles.map}
                //  ref={mapView}
                 initialRegion={LOS_ANGELES_REGION}
        />
    
)}

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
        
});