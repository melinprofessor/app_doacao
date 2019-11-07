import React from 'react';
import { View, Text, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ButtonAndroidComponent from '../components/ButtonAndroidComponent';
import StyleSheet, { estilos } from '../styles/styles';
import ButtonIOSComponent from '../components/ButtonIOSComponent';

export function navigationOptions({ navigate }) {
  return {
    title: 'ConfirmaEmail',
    header: null,
  };
}
const ButtonComponent = Platform.select({
  ios: () => ButtonIOSComponent,
  android: () => ButtonAndroidComponent,
})();

const ConfirmaEmail = (props) => (
  <LinearGradient
    colors={ ['#3CB371', '#2E8B57', '#008000', '#228B22'] }
    style={ estilos.container }
  >
    <View style={ [estilos.container, { justifyContent: 'space-around' }] }>
      <View style={ estilo.container }>
        <View style={ estilo.viewTexto }>
          <Text style={ estilo.fonte }>O E-mail foi</Text>
          <Text style={ estilo.fonte }>Enviado com</Text>
          <Text style={ estilo.fonte }>Sucesso!</Text>
        </View>
      </View>
      <View style={ estilo.container }>
        <ButtonComponent title='FAZER LOGIN' />
      </View>
      <View style={ estilo.container }>
        <Text style={ estilo.fonte2 }>Verifique seu e-mail!</Text>
      </View>
    </View>
  </LinearGradient>

);

const ConfirmaEmailScreen = {
  screen: ConfirmaEmail,
  navigationOptions,
};

const estilo = StyleSheet.create({
  fonte: {
    color: '#fff',
    fontSize: 45,
  },
  fonte2: {
    color: '#fff',
    fontSize: 25,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTexto: {
    borderLeftWidth: 10,
    borderLeftColor: '#fff',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 15,
  },
});

export default ConfirmaEmailScreen;
