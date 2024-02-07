// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// export default function Settings({ navigation, route }) {
//   const { mapType, setMapType } = route.params;

//   return (
//     <View style={styles.container}>
//       <Picker
//         selectedValue={mapType}
//         onValueChange={(itemValue, itemIndex) => setMapType(itemValue)}>
//         <Picker.Item label="Standard" value="standard" />
//         <Picker.Item label="Terrain" value="terrain" /> {/* Note: 'terrain' might not be supported */}
//         <Picker.Item label="Satellite" value="satellite" />
//       </Picker>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
// });