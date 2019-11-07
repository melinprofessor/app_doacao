import React from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet, { estilos } from '../../styles/styles';

export function navigationOptions({ navigation}) {
  return {
    title: 'Menu Inicial',
    headerVisible: false,
  }
}

const MenuPrincipal = props => {
  return (
    <LinearGradient
      colors={ ['#3CB371', '#2E8B57', '#008000', '#228B22'] }
      style={ estilos.container }
    >
      <View>
        <Text>Menu</Text>
      </View>
    </LinearGradient>

  )
}

const MenuPrincipalScreen = {
  screen: MenuPrincipal,
  navigationOptions
}


export default MenuPrincipalScreen;
