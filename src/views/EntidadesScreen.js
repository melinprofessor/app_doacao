import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet, {estilos} from '../styles/styles';
import HeaderComponent from '../components/HeaderComponent';
import ListaComponent from '../components/ListaComponent';
import {getEntidades} from '../service/api';

export function navigationOptions({navigate}) {
  return {
    title: 'Entidades Cadastradas',
    header: null,
  };
}


const getAllEntidades = async(setList, setError) => {
  await getEntidades().then((result) => {
    console.log(result)
    setList(result);
  }).catch((e)=> {
    setError(e);
  });
}
const Entidades = props => {
  const [list, setList] = useState([]);
  const [error, setError] = useState('');


  useEffect(() => {
    getAllEntidades(setList, setError)
  }, [])

  return (
    <LinearGradient colors={['#3CB371', '#2E8B57', '#008000', '#228B22']} style={estilos.container}>
      <HeaderComponent {...props} iconeNome="arrow-back" nomeTitulo="Entidades Cadastradas" />
      <ScrollView>
        <ListaComponent list={list} tipo='entidades' />
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

const EntidadesScreen = {
  screen: Entidades,
  navigationOptions,
};

export default EntidadesScreen;
