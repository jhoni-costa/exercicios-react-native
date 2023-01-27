import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Componentes por classe
export default class App extends Component {
  render() {
    return (
      <View>
        <View>
          <Text>Teste</Text>
          <Text>React Native</Text>
        </View>
        <View>
          <Text>Teste 2 </Text>
          <Text>React Native 2</Text>
        </View>
      </View>
    );
  }
}

// Componentes por function
// export default function App() {
//   return (
//     <View>
//       <View>
//         <Text>Teste</Text>
//         <Text>React Native</Text>
//       </View>
//       <View>
//         <Text>Teste 2 </Text>
//         <Text>React Native 2</Text>
//       </View>
//     </View>
//   );
// };