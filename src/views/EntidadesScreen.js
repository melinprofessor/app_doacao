import React from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet, { estilos } from '../styles/styles';
import ButtonAndroidComponent from '../components/ButtonAndroidComponent';
import ButtonIOSComponent from '../components/ButtonIOSComponent';
import HeaderComponent from '../components/HeaderComponent';
import ListaComponent from '../components/ListaComponent';

export function navigationOptions({ navigate }) {
  return {
    title: 'Entidades',
    header: null,
  };
}

const ButtonComponent = Platform.select({
  ios: () => ButtonIOSComponent,
  android: () => ButtonAndroidComponent,
})();


const Entidades = props => (
  <LinearGradient colors={ ['#3CB371', '#2E8B57', '#008000', '#228B22'] } style={ estilos.container }>
    <HeaderComponent { ...props } iconeNome="menu" nomeTitulo="Login" />
    <ScrollView>
      <ListaComponent />     
      {/* <View style={ [estilos.container, { justifyContent: 'space-around' }] }>
        
        <View style={ {backgroundColor: '#fff'} }>
          <Text>Entidade</Text>
          <Text>Enereço</Text>
          <Text>Descrição</Text>
          <Text>Telefone</Text>
        </View>

      </View> */}
    </ScrollView>
  </LinearGradient>
);

const estilo = StyleSheet.create({
  fonte: {
    color: '#fff',
    fontSize: 35,
  },
  container: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTexto: {
    borderLeftWidth: 10,
    borderLeftColor: '#fff',
    paddingLeft: 20, 
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
  inputDesciption: {    
    textAlignVertical: 'top',
    backgroundColor: '#fff',
    width: '80%',
    height: 90,
  },
  colorButton: {
    backgroundColor: '#fff',
  },
  entries: {
    width: '95%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginBottom: 15,
  },
});

const EntidadesScreen = {
  screen: Entidades,
  navigationOptions,
};

export default EntidadesScreen;