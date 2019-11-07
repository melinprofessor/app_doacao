import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet, {estilos} from '../styles/styles';
import HeaderComponent from '../components/HeaderComponent';
import ListaComponent from '../components/ListaComponent';
import LoaderComponent from '../components/LoaderComponent';
import {getDoacoesByIdDoadora} from '../service/api';

export function navigationOptions({navigate}) {
  return {
    title: 'Doações Realizadas',
    header: null,
  };
}



const Doados = props => {
  const [list, setList] = useState([]);
  const [error, setError] = useState('');
  const [visible, setVisible] = useState(false);

  const getAllDoados = async(setList, setError) => {
    setVisible(true);
    await getDoacoesByIdDoadora().then((result) => {
      setList(result);
      setVisible(false);
    }).catch((e)=> {
      setError(e);
      setVisible(false);
    });
  }

  useEffect(() => {
    getAllDoados(setList, setError)
  }, [])

  return (
    <LinearGradient colors={['#3CB371', '#2E8B57', '#008000', '#228B22']} style={estilos.container}>
      {visible && <LoaderComponent visible={visible} />}
      <HeaderComponent {...props} iconeNome="arrow-back" nomeTitulo="Produtos doados" />
      <ScrollView>
        <ListaComponent list={list} tipo='doados' />
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

const DoadosScreen = {
  screen: Doados,
  navigationOptions,
};

export default DoadosScreen;
