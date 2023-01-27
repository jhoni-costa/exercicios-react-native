import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Comp1 from './components/comp1';
import Caixas from './components/Caixas';
import Estilos from './styles/estilos.js';

// Componentes por function
export default function App() {
  return (
    <View style={Estilos.container}>
      <Caixas></Caixas>
    </View>

  );
};

// Componentes por classe
// export default class App extends Component {
//   render() {
//     return (
//       <View>
//         <View>
//           <Text>Teste</Text>
//           <Text>React Native</Text>
//         </View>
//         <View>
//           <Text>Teste 2 </Text>
//           <Text>React Native 2</Text>
//         </View>
//       </View>
//     );
//   }
// }

