import React, { useState } from "react";
import { Button, View, Alert, SafeAreaView, Text, StatusBar, StyleSheet } from "react-native";

const App = () => {

  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.count}>{count}</Text>
        <View style={styles.flex}>
          <View style={{flex:1, marginRight:10}}>
            <Button title="-" onPress={() => setCount(count -1 )} color={'blue'}/>
          </View>
          <View style={{flex:1, marginLeft:10}}>
            <Button title="+" onPress={() => setCount(count + 1)} color={'blue'}/>
          </View>
        </View>
        <Button title="Reset" onPress={() => setCount(0)} color={'purple'}/>
    </SafeAreaView>
  );  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  count:{
    fontSize:50,
    textAlign:'center'
  },
  flex:{
    flexDirection:"row",
    marginTop: 40,
    marginBottom: 10
  }
});
export default App;