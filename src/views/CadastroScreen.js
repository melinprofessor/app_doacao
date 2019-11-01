import React from 'react';
import { ScrollView, View, Text, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet, { estilos } from '../styles/styles';
import ButtonAndroidComponent from '../components/ButtonAndroidComponent';
import ButtonIOSComponent from '../components/ButtonIOSComponent';
import HeaderComponent from '../components/HeaderComponent';


export function navigationOptions({ navigate }) {
  return {
    title: 'Cadastro',
    header: null,
  };
}

const ButtonComponent = Platform.select({
  ios: () => ButtonIOSComponent,
  android: () => ButtonAndroidComponent,
})();


const Cadastro = props => {
  const { navigate } = props.navigation;
  return (
    <LinearGradient colors={["#579054", "#304250"]} style={estilos.container}>
      <ScrollView>
        <View style={ [estilos.container, { justifyContent: 'space-around' }] }>
          <HeaderComponent { ...props } iconeNome="arrow-back" nomeTitulo="Cadastro de Usuário" />
          <View style={ estilo.container }>
            <View style={ estilo.viewTexto }>
              <Text style={ estilo.fonte }>Entre com suas</Text>
              <Text style={ estilo.fonte }>informações</Text>
            </View>
          </View>
          <View style={ estilo.container }>
            <View style={ estilo.entries }>
              <TextInput placeholder="nome da entidade" style={ estilo.input } />
            </View>
            <View style={ estilo.entries }>
              <TextInput placeholder="e-mail" style={ estilo.input } />
            </View>
            <View style={ estilo.entries }>
               <TextInput placeholder="login" style={ estilo.input } />
             </View>
            <View style={ estilo.entries }>
              <TextInput placeholder="senha" style={ estilo.input } />
            </View>
            <View style={ estilo.entries }>
              <TextInput placeholder="endereço" style={ estilo.input } />
            </View>
            <View style={ estilo.entries }>
              <TextInput placeholder="telefone" style={ estilo.input } />
            </View>
            <View style={ estilo.entries }>
              <TextInput multiline placeholder="descrição da entidade" style={estilo.inputDesciption} />
            </View>
            <ButtonComponent onPressHandler={ () => navigate('confirmaCadastro')} title="CONFIRMAR" />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );

}
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

const CadastroScreen = {
  screen: Cadastro,
  navigationOptions,
};

export default CadastroScreen;
