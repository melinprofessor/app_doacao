import React, {useState} from 'react';
import { ScrollView, View, Text, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet, { estilos } from '../styles/styles';
import { CadastrarEntidade } from '../service/api';
import ButtonAndroidComponent from '../components/ButtonAndroidComponent';
import ButtonIOSComponent from '../components/ButtonIOSComponent';
import HeaderComponent from '../components/HeaderComponent';
import AlertComponent from '../components/AlertComponent';
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

const registrar = async entidadeObject => {
  const entidade = await CadastrarEntidade(entidadeObject);
  let title,
    msg = '';
  let buttons = [
    {
      text: 'Cancel',
      onPress: () => navigate('RegisterFuelStation'), // ?
      style: 'cancel'
    },
    {
      text: 'Ok',
      onPress: () => console.log('ok')
    },
  ];

  if (entidade && entidade.code === 11000) {
    title = 'Erro ao Cadastrar';
    msg = 'Já existe uma entidade cadastrada com este nome';
  } else if (entidade.errors) {
    title = 'Erro ao Cadastrar';
    msg = Object.keys(entidade.errors)
      .map(t => entidade.errors[t].message)
      .join('\n');
  } else {
    title = 'Sucesso ao cadastrar!';
    msg = 'Deseja cadastrar outra Entidade?';
    buttons = [
      {
        text: 'Não',
        onPress: () => navigate('confirmaCadastro'),
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => console.log('sim')
      }
    ];
  }
  return AlertComponent(title, msg, buttons);
};


const Cadastro = props => {

  //const { navigate } = props.navigation;

  navigate = props.navigation.navigate; // ?
  const [entidade, setEntidade] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [descricao, setDescricao] = useState('');
  const [error, setError] = useState('');
  const [active, setActive] = useState(true);

  return (
    <LinearGradient colors={ ['#579054', '#304250'] } style={ estilos.container }>
      <ScrollView>
        <View style={ [estilos.container, { justifyContent: 'space-around' }] }>
          <HeaderComponent { ...props } iconeNome="arrow-back" nomeTitulo="Cadastro de Usuário" />
          <View style={ estilo.container }>
            <View style={ estilo.viewTexto }>
              <Text style={ estilo.fonte }>Entre com suas</Text>
              <Text style={ estilo.fonte }>informações</Text>
            </View>
          </View>
          <View style={ [estilo.container, {justifyContent: 'center', alignItems: 'center'}] }>
            <View style={ {width: '100%',justifyContent: 'center', alignItems: 'center'} }>
              <InputTextComponent placeholder="nome da entidade" setValue={ setEntidade } value={ entidade }  />
            </View>
            <View style={ {width: '100%',justifyContent: 'center', alignItems: 'center'} }>
              <InputTextComponent  placeholder="e-mail" setValue={ setEmail } value={ email } />
            </View>
            <View style={ {width: '100%',justifyContent: 'center', alignItems: 'center'} }>
              <InputTextComponent placeholder="senha" setValue={ setPassword } value={ password } />
            </View>
            <View style={ {width: '100%',justifyContent: 'center', alignItems: 'center'} }>
              <InputTextComponent placeholder="endereço" setValue={ setEndereco } value={ endereco } />
            </View>
            <View style={ {width: '100%',justifyContent: 'center', alignItems: 'center'} }>
              <InputTextComponent placeholder="telefone" setValue={ setTelefone } value={ telefone } />
            </View>
            <View style={ {width: '100%',justifyContent: 'center', alignItems: 'center'} }>
              <InputTextComponent multiline placeholder="descrição da entidade" setValue={ setDescricao } value={ descricao }  />
            </View>
            <ButtonComponent onPress={ async () => { await registrar({name: entidade, email: email,password: password, address: endereco, contact: telefone, active: active, description: descricao});} } title="CONFIRMAR" />
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
