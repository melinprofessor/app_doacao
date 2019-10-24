import React from 'react';
import {
  View, Text, TextInput, Button, Platform, Linking
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet, { estilos } from '../styles/styles';
import ButtonAndroidComponent from '../components/ButtonAndroidComponent';
import ButtonIOSComponent from '../components/ButtonIOSComponent';


export function navigationOptions({ navigate }) {
  return {
    title: 'Login',
    header: null,
  };
}

const ButtonComponent = Platform.select({
  ios: () => ButtonIOSComponent,
  android: () => ButtonAndroidComponent,
})();

const Login = (props) => (
  <LinearGradient
    colors={ ['#3CB371', '#2E8B57', '#008000', '#228B22'] }
    style={ estilos.container }
  >
    <View style={ [estilos.container, { justifyContent: 'space-around' }] }>
      <View style={ estilo.container }>
        <View style={ estilo.viewTexto }>
          <Text style={ estilo.fonte }>Boa</Text>
          <Text style={ estilo.fonte }>Ação</Text>
        </View>
      </View>
      <View style={ estilo.container }>
        <View style={ estilo.viewInput }>
          <View style={ [estilo.viewInput, { backgroundColor: '#fff', borderRadius: 20 }] }>
            <TextInput placeholder="Login" style={ estilo.input } />
          </View>
          <View style={ [estilo.viewInput, { marginTop: 15, backgroundColor: '#fff', borderRadius: 20 }] }>
            <TextInput placeholder="Senha" style={ estilo.input } />
          </View>
        </View>
        <ButtonComponent title='ENTRAR' />
        <ButtonComponent title='CADASTRAR' />
      </View>
      <View style={ estilo.container }>
        <Text style={ { color: '#fff', fontSize: 25 } }>Esqueceu login ou senha?</Text>
      </View>
    </View>
  </LinearGradient>
);

const LoginScreen = {
  screen: Login,
  navigationOptions,
};

const estilo = StyleSheet.create({
  fonte: {
    color: '#fff',
    fontSize: 75,
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
  viewInput: {
    width: '95%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    height: 45,
  },
  colorButton: {
    backgroundColor: '#fff',
  },
});

export default LoginScreen;
