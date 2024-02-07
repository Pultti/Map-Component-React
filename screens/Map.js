import React, { useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps';

export default function Map(props) {
    const [marker, setMarker] = useState(null);

    const handleLongPress = (event) => {
        setMarker(event.nativeEvent.coordinate);
    };

    return (
        <MapView
            style={styles.map}
            region={props.location}
            onLongPress={handleLongPress}
            showsUserLocation={true} // This shows the user's current location
            userLocationAnnotationTitle="My Location"
        >
            {marker && (
                <Marker
                    coordinate={marker}
                    title={"Marker"}
                    description={"You placed a marker here"}
                />
            )}
        </MapView>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    }
});
   // useEffect(() => {
    //     (async () => {
    //         await getUsersPosition();
    //     })();
    // }, []);

    // const getUsersPosition = async () => {
    //     //Matkapuhelin pyytää käyttäjältä lupaa sijainnin käyttöön, tämä on välttämätöntä teknisestikin
    //     let { status } = await Location.requestForegroundPermissionsAsync();
    //     console.log('status', status);
    //     try {
    //         if (status !== 'granted') {
    //             console.log('Permission to access location was denied');
    //             return;
    //         }

    //         const position = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High});
    //         //Spread operaattori, joka kopioi location-objektin ja korvaa latitude ja longitude -arvot
    //         setLocation({ ...location, "latitude": position.coords.latitude, "longitude": position.coords.longitude });
    //     } catch(error) {
    //         console.log('error', error);
    //     }
    // };

      // initialRegion={{
            //     latitude: 37.78825,
            //     longitude: -122.4324,
            //     latitudeDelta: 0.0922,
            //     longitudeDelta: 0.0421,
            // }}