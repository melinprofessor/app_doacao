import React from 'react';
import { View, TextInput, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet, { estilos } from '../styles/styles';
import ButtonAndroidComponent from '../components/ButtonAndroidComponent';
import ButtonIOSComponent from '../components/ButtonIOSComponent';
import HeaderComponent from '../components/HeaderComponent';
import InputTextComponent from '../components/InputTextComponent';
import AreaTextComponent from '../components/AreaTextComponent';

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
    colors={['#3CB371', '#2E8B57', '#008000', '#228B22']}
    style={estilos.container}
  >
    <HeaderComponent {...props} iconeNome="arrow-back" nomeTitulo="Criar Doação" />
    <View style={[estilos.container, { justifyContent: 'space-around', alignItems: 'center' }]}>

      <View style={estilo.container}>
        <InputTextComponent placeholder='Descrição Doação' />
        <AreaTextComponent placeholder='Detalhe da doação...' />
      </View>
      <View>
        <ButtonComponent title="Cadastrar Doação" />
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
