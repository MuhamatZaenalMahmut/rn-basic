import React from 'react';
import { Text, View } from 'react-native';
 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "M Zaenal Mahmut"
    };
  }
  
  render() {
    return (
      <View>
        <Text>Hello {this.state.name}</Text>
      </View>
    );
  }
}
 
export default App