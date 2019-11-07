import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HeaderComponent from '../components/HeaderComponent';
import StyleSheet, {estilos} from '../styles/styles';
import ListaComponent from '../components/ListaComponent';
import {getDoacoesByIdReceptora} from '../service/api';
import LoaderComponent from '../components/LoaderComponent';


export function navigationOptions({navigate}) {
  return {
    title: 'Pedidos Realizados',
    header: null,
  };
}


const Pedidos_Screen = (props) => {
  const [list, setList] = useState([]);
  const [error, setError] = useState('');
  const [visible, setVisible] = useState(false);

  const getAllPedidos = async(setList, setError) => {
    setVisible(true);
    await getDoacoesByIdReceptora().then((result) => {
      console.log(result)
      setList(result);
      setVisible(false);
    }).catch((e)=> {
      setError(e);
      setVisible(false);
    });
  }

  useEffect(() => {
    getAllPedidos(setList, setError)
  }, [])

  return (
    <LinearGradient
      colors={['#3CB371', '#2E8B57', '#008000', '#228B22']}
      style={estilos.container}
    >
      {visible && <LoaderComponent visible={visible} />}

      <HeaderComponent {...props} iconeNome="arrow-back" nomeTitulo="Pedidos" />
      <ScrollView>
        <ListaComponent list={list} tipo="pedidos" />
      </ScrollView>
    </LinearGradient>
  );
};

const PedidosScreen = {
  screen: Pedidos_Screen,
  navigationOptions,
};

const estilo = StyleSheet.create({
  fonte: {
    color: '#fff',
    fontSize: 35,
    paddingTop: 100,
    paddingBottom: 50,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTexto: {
    borderLeftWidth: 10,
    borderLeftColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    padding: 15,
    alignItems: 'flex-start',


  },

  viewInput: {
    width: '90%',

    alignItems: 'center',
  },

  input: {
    backgroundColor: '#fff',
    width: '80%',
    height: 45,
    padding: 10,


  },
  colorButton: {
    backgroundColor: '#fff',
  },

  viewData: {
    marginLeft: 100,
  }

});

export default PedidosScreen;
