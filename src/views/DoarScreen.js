import React, {useState} from 'react';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet, { estilos } from '../styles/styles';
import ButtonAndroidComponent from '../components/ButtonAndroidComponent';
import ButtonIOSComponent from '../components/ButtonIOSComponent';
import InputTextComponent from '../components/InputTextComponent';
import AsyncStorage from '@react-native-community/async-storage';

export function navigationOptions({ navigate }) {
  return {
    title: 'Doar',
    header: null,
  };
}

const ButtonComponent = Platform.select({
  ios: () => ButtonIOSComponent,
  android: () => ButtonAndroidComponent,
})();

const registrar = async entidadeObject => {

  const getData = await AsyncStorage.getItem('entidade');
  const entidadeDoadora = JSON.parse(getData);
  entidadeObject.entidadeDoadora = entidadeDoadora._id;

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

const Doar = props => {

  const [produto, setProduto] = useState('');
  const [descricao, setDescricao] = useState('');

  return (
    <LinearGradient colors={ ['#579054', '#304250'] } style={ estilos.container }>
      <View
        style={ [
          estilos.container,
          { justifyContent: 'space-around', alignItems: 'center' }
        ] }
      >
        <View style={ estilo.container }>
          <InputTextComponent placeholder="Produto" setValue={ setProduto } value={ produto } style={ [estilo.input] } />
          <View style={ { width: '100%', borderRadius: 20 } }>
            <InputTextComponent
              placeholder='Descrição'
              style={ [
                estilo.input,
                { marginTop: 15, height: 150, textAlignVertical: 'top' }
              ] }
              setValue={ setDescricao }
              value={descricao}
            />
          </View>
        </View>
        <View>
          <View>
            <ButtonComponent
              onPressHandler={ async () => {
                await registrar({
                  active : true,
                  products: {
                    titulo: produto,
                    detalhes: descricao
                  },
                  entidadeDoadora : 'entidade',
                });
              } }
              title='Cadastrar Doação'
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const DoarScreen = {
  screen: Doar,
  navigationOptions,
};

const estilo = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    height: 45,
  },
});

export default DoarScreen;
