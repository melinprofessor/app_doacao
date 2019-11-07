import React, {useState} from 'react';
import { View, Platform } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet, { estilos } from '../styles/styles';
import ButtonAndroidComponent from '../components/ButtonAndroidComponent';
import ButtonIOSComponent from '../components/ButtonIOSComponent';
import AsyncStorage from '@react-native-community/async-storage';
import HeaderComponent from '../components/HeaderComponent';
import InputTextComponent from '../components/InputTextComponent';
import AreaTextComponent from '../components/AreaTextComponent';
import { CadastrarDoacao } from '../service/api';
import AlertComponent from '../components/AlertComponent';

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



const Doar = props => {
  const {navigate} = props.navigation;
  const [produto, setProduto] = useState("");
  const [descricao, setDescricao] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState('');

  const LimpaTela = () =>{
    setProduto('');
    setDescricao('');
  }

  const Close = () =>{
    setProduto('');
    setDescricao('');
    navigate('menu')
  }

  const registrar = async entidadeObject => {
    if (produto === '' || descricao === '') {
      AlertComponent('Erro ao Cadastrar', 'Os campos devem ser preenchidos');
    } else {
      const entidadeDoadora = await AsyncStorage.getItem('entidade');
      entidadeObject.entidadeDoadora = entidadeDoadora;

      setVisible(true);
      const entidade = await CadastrarDoacao(entidadeObject)
        .then(result => {
          setVisible(false);
          AlertComponent('Cadastrado com sucesso!',
           'Deseja cadastrar outra doação?',
           [{text: 'Sim', onPress: () => LimpaTela()},
            {text: 'Não', onPress: () => Close()} ]);

        })
        .catch(error => {
          setVisible(false);
          AlertComponent('Erro ao Cadastrar', error);
        });
      console.log(entidade);
    }
  };

  return (
    <LinearGradient
      colors={["#3CB371", "#2E8B57", "#008000", "#228B22"]}
      style={estilos.container}
    >
      <HeaderComponent
        {...props}
        iconeNome="arrow-back"
        nomeTitulo="Criar Doação"
      />
      <View
        style={[
          estilos.container,
          { justifyContent: "space-around", alignItems: "center" }
        ]}
      >
        <View style={estilo.container}>
          <InputTextComponent value={produto} setValue={setProduto} placeholder="Descrição Doação" />
          <AreaTextComponent  value={descricao} setValue={setDescricao} placeholder="Detalhe da doação..." />
        </View>
        <View>
          <ButtonComponent
            title="Cadastrar Doação"
            onPressHandler={async () => {
              await registrar({
                active: true,
                products: {
                  titulo: produto,
                  detalhes: descricao
                },
                entidadeDoadora: "entidade"
              });
            }}
          />
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
