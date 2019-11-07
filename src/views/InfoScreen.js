import React from 'react';
import { View, Text, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet, { estilos } from '../styles/styles';
import ButtonAndroidComponent from '../components/ButtonAndroidComponent';
import ButtonIOSComponent from '../components/ButtonIOSComponent';

export function navigationOptions({ navigate }) {
  return {
    title: 'Info',
    header: null,
  };
}

const Info = () => (
  <LinearGradient
    colors={ ['#3CB371', '#2E8B57', '#008000', '#228B22'] }
    style={ estilos.container }
  >
    <View style={ [estilo.container, { justifyContent: 'space-around' }] }>
      <View style={ estilo.title }>
        <Text style={ estilo.texto }>Criadores</Text>
      </View>
      <View style={ estilo.nomes }>
        <Text style={ estilo.texto }>- Breno Fernandes</Text>
        <Text style={ estilo.texto }>- Lucas Mendes</Text>
        <Text style={ estilo.texto }>- Lucas Texeira</Text>
        <Text style={ estilo.texto }>- Márcio Machado</Text>
        <Text style={ estilo.texto }>- Matheus Tomicioli</Text>
        <Text style={ estilo.texto }>- Ricardo Cardona</Text>
        <Text style={ estilo.texto }>- Vinicius Melin</Text>
      </View>
    </View>
  </LinearGradient>
);


const InfoScreen = {
  screen: Info,
  navigationOptions,
};

const estilo = StyleSheet.create({
  fonte: {
    color: '#fff',
    fontSize: 75,
  },
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  texto: {
    fontSize: 30,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    color: 'white',
  },
  title: {
    margin: 30,
    // fontSize: 45,
    // alignItems: 'flex-start',
    // alignSelf: 'flex-start',
  },
  nomes: {
    alignSelf: 'flex-start',
    margin: 30,
  },
});

export default InfoScreen;
