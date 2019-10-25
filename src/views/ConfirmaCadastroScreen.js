import React from 'react';
import {View, Text, Button, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ButtonAndroidComponent from '../components/ButtonAndroidComponent';
import StyleSheet, { estilos } from '../styles/styles';
import ButtonIOSComponent from '../components/ButtonIOSComponent';

export function navigationOptions({ navigate }) {
    return {
      title: 'ConfirmaCadastro',
      header: null,
    };
  }

  const ButtonComponent = Platform.select({
    ios: () => ButtonIOSComponent,
    android: () => ButtonAndroidComponent,
  })();

const ConfirmaCadastro = () => (
    <LinearGradient
        colors={ ['#3CB371', '#2E8B57', '#008000', '#228B22'] }
        style={ estilos.container }    
    >
        <View>
            <View>
                <View>
                    <Text>Usuário</Text>
                    <Text>Cadastrado</Text>
                    <Text>com Sucesso!</Text>
                </View>                
            </View>
            <View>
                <View>
                    <Text>TESTE</Text>
                </View>
                <ButtonComponent title='FAZER LOGIN'/>
            </View>
        </View>
    </LinearGradient>

);

const ConfirmaCadastroScreen = {
    screen: CpnfirmaCadastro,
    navigationOptions,
  };

const estilo = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
      },
})

export default ConfirmaCadastroScreen;