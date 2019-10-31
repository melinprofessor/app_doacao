import React, {useState} from 'react';
import { View, Text, ImageBackground, Platform, Alert } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet, { estilos } from '../styles/styles';
import ButtonAndroidComponent from '../components/ButtonAndroidComponent';
import ButtonIOSComponent from '../components/ButtonIOSComponent';
import InputTextComponent from '../components/InputTextComponent';
import { Autenticar } from '../service/api';
import LoaderComponent from '../components/LoaderComponent';
import AlertComponent from '../components/AlertComponent';

const loginImg = require('../imgs/loginBackground.png');

export function navigationOptions({ navigate }) {
  return {
    title: 'Login',
    header: null
  };
}

const ButtonComponent = Platform.select({
  ios: () => ButtonIOSComponent,
  android: () => ButtonAndroidComponent
})();




const Login = props => {
  const { navigate } = props.navigation;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState('');


  const autenticarHandle = async () => {

    setVisible(true);
    await Autenticar(email, password).then((result) => {
      console.log(result);
      setVisible(false);
      setError(false);
      navigate('drawer');
    }).catch(e => {
      console.log(e.data)
      setError(e)
      setVisible(false);
      AlertComponent('Erro ao Entrar', e.data)
    });

  }

  return (
    <LinearGradient
      colors={ ['#3CB371', '#2E8B57', '#008000', '#228B22'] }
      style={ estilos.container }
    >
      {visible && <LoaderComponent visible={ visible } />}
      <ImageBackground
        imageStyle={ { opacity: 0.5 } }
        source={ loginImg }
        style={ { width: '100%', height: '100%' } }
      >
        <View style={ [estilos.container, { justifyContent: 'space-around' }] }>
          <View style={ estilo.container }>
            <View style={ estilo.viewTexto }>
              <Text style={ estilo.fonte }>Boa</Text>
              <Text style={ estilo.fonte }>Ação</Text>
            </View>
          </View>
          <View style={ estilo.container }>
            <InputTextComponent placeholder="Email"  setValue={ setEmail } value={ email } />
            <InputTextComponent placeholder="Senha"  setValue={ setPassword } value={ password } />
            <ButtonComponent onPressHandler={async() => { await autenticarHandle(email,password)}} title="ENTRAR" />
            <ButtonComponent onPressHandler={ () => { navigate('cadastro')} } title="CADASTRAR" />
          </View>
          <View style={ [estilo.container] }>
            <Text onPress={ () => navigate('esqueceuSenha') } style={ { color: '#fff', fontSize: 25 } }>
              Esqueceu login ou senha?
            </Text>
          </View>
        </View>
      </ImageBackground>
    </LinearGradient>
  );
}

const LoginScreen = {
  screen: Login,
  navigationOptions
};

const estilo = StyleSheet.create({
  fonte: {
    color: '#fff',
    fontSize: 75
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewTexto: {
    borderLeftWidth: 10,
    borderLeftColor: '#fff',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 15
  },
  viewInput: {
    width: '95%',
    alignItems: 'center'
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    height: 45
  },
  colorButton: {
    backgroundColor: '#fff'
  }
});

export default LoginScreen;
