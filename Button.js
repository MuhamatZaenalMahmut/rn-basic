import React from "react";
import { Button, View, Alert } from "react-native";

const App = () => (
  <View>
    <Button title="Click Me" onPress={() => Alert.alert("I am pressed")} />
  </View>
);
export default App;