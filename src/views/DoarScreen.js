import React from 'react';
import { View, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet, { estilos } from '../styles/styles';
import ButtonAndroidComponent from '../components/ButtonAndroidComponent';
import ButtonIOSComponent from '../components/ButtonIOSComponent';

export function navigationOptions({ navigate }) {
  return {
    title: 'Doar',
    header: null,
  };
}

const ButtonComponent = Platform.select({
  ios: () => ButtonIOSComponent,
  android: () => ButtonAndroidComponent,
})();

const Doar = props => (
  <LinearGradient
    colors={ ['#3CB371', '#2E8B57', '#008000', '#228B22'] }
    style={ estilos.container }
  >
    <View style={ [estilos.container, { justifyContent: 'space-around', alignItems: 'center' }] }>
      <View style={ estilo.container }>
        <TextInput placeholder="Produto" style={ [estilo.input] } />
        <View style={ { width: '100%', borderRadius: 20 } }>
          <TextInput placeholder="Descrição" style={ [estilo.input, { marginTop: 15, height: 150, textAlignVertical: 'top' }] } />
        </View>
      </View>
      <View>
        <View>
          <ButtonComponent title="Cadastrar Doação" />
        </View>
      </View>
    </View>
  </LinearGradient>
);

const DoarScreen = {
  screen: Doar,
  navigationOptions,
};

const estilo = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    height: 45,
  },
});

export default DoarScreen;
