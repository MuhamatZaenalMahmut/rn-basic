import React from "react";
import { View, Text, TextInput } from "react-native";

const App = () => {
  return (
    <View style={{ margin: 10 }}>
      <Text>The user can type something.</Text>
      <TextInput
        style={{
          height: 30,
          borderColor: "black",
          borderWidth: 1,
        }}
        defaultValue="I am a Text Input"
      />
    </View>
  );
};
export default App;