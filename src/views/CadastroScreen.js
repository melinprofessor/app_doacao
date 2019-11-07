import React, {useState} from 'react';
import { ScrollView, View, Text, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet, { estilos } from '../styles/styles';
import { CadastrarEntidade } from '../service/api';
import ButtonAndroidComponent from '../components/ButtonAndroidComponent';
import ButtonIOSComponent from '../components/ButtonIOSComponent';
import HeaderComponent from '../components/HeaderComponent';
import AlertComponent from '../components/AlertComponent';
import LoaderComponent from '../components/LoaderComponent';

import InputTextComponent from '../components/InputTextComponent';

let navigate = null;

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


  const [entidade, setEntidade] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [descricao, setDescricao] = useState('');
  const [error, setError] = useState('');
  const [active, setActive] = useState(true);
  const [visible, setVisible] = useState(false);

  const registrar = async entidadeObject => {

    setVisible(true);
    const entidade = await CadastrarEntidade(entidadeObject).then((result) => {
      setVisible(false);
      navigate('confirmaCadastro')
    }).catch((error) => {
      setVisible(false);
      AlertComponent('Erro ao Cadastrar', error)
    })
    console.log(entidade)
  };

  return (
    <LinearGradient colors={ ['#579054', '#304250'] } style={ estilos.container }>
      {visible && <LoaderComponent visible={ visible } />}
      <ScrollView>
        <View style={ [estilos.container, { justifyContent: 'space-around' }] }>
          <HeaderComponent
            { ...props }
            iconeNome="arrow-back"
            nomeTitulo="Cadastro de Usuário"
          />
          <View style={ estilo.container }>
            <View style={estilo.viewTexto}>
              <Text style={estilo.fonte}>Entre com suas</Text>
              <Text style={estilo.fonte}>informações</Text>
            </View>
          </View>
          <View
            style={ [
              estilo.container,
              { justifyContent: 'center', alignItems: 'center' }
            ] }
          >
            <View
              style={ {
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
              } }
            >
              <InputTextComponent
                placeholder='nome da entidade'
                setValue={ setEntidade }
                value={ entidade }
              />
            </View>
            <View
              style={ {
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
              } }
            >
              <InputTextComponent
                placeholder='e-mail'
                setValue={ setEmail }
                value={ email }
              />
            </View>
            <View
              style={ {
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
              } }
            >
              <InputTextComponent
                placeholder='senha'
                setValue={ setPassword }
                value={ password }
              />
            </View>
            <View
              style={ {
                width:  '100%',
                justifyContent: 'center',
                alignItems: 'center'
              } }
            >
              <InputTextComponent
                placeholder="endereço"
                setValue={ setEndereco }
                value={ endereco }
              />
            </View>
            <View
              style={ {
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
              } }
            >
              <InputTextComponent
                placeholder="telefone"
                setValue={ setTelefone }
                value={ telefone }
              />
            </View>
            <View
              style={ {
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
              } }
            >
              <InputTextComponent
                multiline
                placeholder='descrição da entidade'
                setValue={ setDescricao }
              />
            </View>
            <ButtonComponent
              onPressHandler={ async () => {
                await registrar({
                  name: entidade,
                  email: email,
                  password: password,
                  address: endereco,
                  contact: telefone,
                  active: active,
                  description: descricao,
                });
              } }
              title="CONFIRMAR"
            />
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
