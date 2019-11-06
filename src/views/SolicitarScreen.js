import React from 'react';
import { ScrollView, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet, { estilos } from '../styles/styles';
import ButtonAndroidComponent from '../components/ButtonAndroidComponent';
import ButtonIOSComponent from '../components/ButtonIOSComponent';
import ListaComponent from '../components/ListaComponent';

import HeaderComponent from '../components/HeaderComponent';

export function navigationOptions({ navigate }) {
  return {
    title: 'Solicitar',
    header: null,
  };
}

const Solicitar = (props) => (
  <LinearGradient
    colors={['#3CB371', '#2E8B57', '#008000', '#228B22']}
    style={estilos.container}
  >
    <HeaderComponent {...props} iconeNome="arrow-back" nomeTitulo="Pegar Doação" />
    <ScrollView>
      <ListaComponent />
    </ScrollView>
  </LinearGradient>
);

const SolicitarScreen = {
  screen: Solicitar,
  navigationOptions,
};

const estilo = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: '#228B22',
  },
  input: {
    backgroundColor: '#fff',
    width: '70%',
    height: 45,
  },
  inputEntidade: {
    width: '15%',
    backgroundColor: '#fff',
    height: 45,
  },
  botaoSolicitar: {
    width: '15%',
  },
});

export default SolicitarScreen;
