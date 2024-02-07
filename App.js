import { SafeAreaView, StyleSheet, View } from "react-native";
import Map from "./screens/Map";
import { PaperProvider } from "react-native-paper";
import React, { useState } from "react"; 
import MainAppBar from "./screens/Appbar";
import * as Location from 'expo-location';
//import Settings from './screens/Settings'; 
 //import { NavigationContainer } from '@react-navigation/native';
 //import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Tarvit navigoinnin, viikko 2 ehkä. Siellä on jokin const stack = createNativeStackNavigator();
//käytiin myös perjantain nauhoitteessa

const settings = {
  backgroundColor: 'green',
}

const icons = {
  location_not_known: 'crosshairs',
  location_known: 'crosshairs-question',
  location_found: 'crosshairs-gps'

}

//const Stack = createNativeStackNavigator()

export default function App() {
  const [icon, setIcon] = useState(icons.location_not_known);
  const [location, setLocation] = useState({
    latitude: 67.0800,
    longitude: 26.4800,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })

 //const [mapType, setMapType] = useState('standard');

const getUsersPosition = async () => {
  setIcon(icons.location_searching);
  let { status } = await Location.requestForegroundPermissionsAsync(); // Corrected this line
  try {
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      setIcon(icons.location_not_known);
      return;
    }

    const position = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
    setLocation({
      ...location,
      "latitude": position.coords.latitude,
      "longitude": position.coords.longitude
    });
    setIcon(icons.location_found);
  } catch (error) {
    console.log('error', error);
    setIcon(icons.location_not_known);
  }
}

 // Function to dynamically set the AppBar title based on the route name
 const getHeaderTitle = (options, routeName) => {
  // Logic to determine title based on route name or options
  // This is a placeholder, adjust the logic as needed
  return options.headerTitle || routeName || 'Default Title';
};

  return (
    <PaperProvider>
      <MainAppBar 
      title="Map"
      backgroundColor={settings.backgroundColor}
      icon={icon}
      getUserPosition={getUsersPosition}
      />
    <SafeAreaView style={styles.container}>
        <Map location={location} />
    </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// Function to dynamically set the AppBar title based on the route name
 //const getHeaderTitle = (options, routeName) => {
  // Logic to determine title based on route name or options
  // This is a placeholder, adjust the logic as needed
//  return options.headerTitle || routeName || 'Default Title';
//};

// return (
//   <PaperProvider>
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Map"
//         screenOptions={({ route, navigation }) => ({
//           header: (props) => (
//             <MainAppBar
//               {...props}
//               title={getHeaderTitle(props.options, route.name)}
//               backgroundColor={settings.backgroundColor}
//               icon={icon}
//               getUserPosition={getUsersPosition}
//               // Assuming 'back' prop is managed by the navigation stack
//             />
//           ),
//         })}
//       >
//         <Stack.Screen name="Map" component={Map} />
//         <Stack.Screen name="Settings" component={Settings} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   </PaperProvider>
// );
// }



