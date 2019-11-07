import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet, {estilos} from '../styles/styles';
import HeaderComponent from '../components/HeaderComponent';
import ListaComponent from '../components/ListaComponent';
import {getDoacoesByIdDoadora} from '../service/api';

export function navigationOptions({navigate}) {
  return {
    title: 'Doados',
    header: null,
  };
}


const getAllDoados = async(setList, setError) => {
  await getDoacoesByIdDoadora().then((result) => {
    console.log('aqui estou:')
    console.log(result)
    setList(result);
  }).catch((e)=> {
    setError(e);
  });

  var listaItens= [
    {
      products: { 
        titulo: 'produto1',
        detalhes: 'descricao1'
      },
      entidadeReceptora: {name: 'entidade1'},
      createdAt: '06/11/2019',
      contact: 'telefone1',
      _id: 'key1',
    },
    {
      products: { 
        titulo: 'produto2',
        detalhes: 'descricao2'
      },
      entidadeReceptora: {name: 'entidade2'},
      createdAt: '07/11/2019',
      contact: 'telefone2',
      _id: 'key2',
    }
  ];

//setList(listaItens);

}
const Doados = props => {
  const [list, setList] = useState([]);
  const [error, setError] = useState('');


  useEffect(() => {
    getAllDoados(setList, setError)
  }, [])

  return (
    <LinearGradient colors={['#3CB371', '#2E8B57', '#008000', '#228B22']} style={estilos.container}>
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
