import React from "react";
import { View } from "react-native";

const App = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 100,
        padding: 20,
      }}>
      <View style={{backgroundColor: 'blue', flex: 1}} />
      <View style={{backgroundColor: 'red', flex: 1}} />
    </View>
  );
};
export default App;