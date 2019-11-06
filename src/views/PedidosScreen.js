import React from 'react';
import {
  View, Text, TextInput, Platform, Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet, { estilos } from '../styles/styles';
import ButtonAndroidComponent from '../components/ButtonAndroidComponent';
import ButtonIOSComponent from '../components/ButtonIOSComponent';



export function navigationOptions({ navigate }) {
  return {
    title: 'Pedidos Realizados',
    header: null,
  };
}


const ButtonComponent = Platform.select({
  ios: () => ButtonIOSComponent,
  android: () => ButtonAndroidComponent,
})();


const Pedidos_Screen = (props) => (
  <LinearGradient
    colors={ ['#3CB371', '#2E8B57', '#008000', '#228B22'] }
    style={ estilos.container }
  >


    <View style={ [estilos.container, { justifyContent: 'space-around' }] }>
      <View style={ estilo.container }>
        <Text style={ estilo.fonte }>Produtos pedidos</Text>

        <View style={ estilo.viewInput }>

          <View style={ [
            estilo.viewInput, estilo.viewTexto,
            { backgroundColor: '#fff', borderRadius: 0,
            },
          ] }
            >
            <View style={ { borderBottomColor: '#000', borderBottomWidth: 1.5, width: '100%' } }>
              <Text style={ estilo.input, estilo.viewTexto } >Produto</Text>
            </View>

            <View style={ { borderBottomColor: '#000', borderBottomWidth: 1.5, width: '100%', paddingBottom: 50 } }>
              <Text style={ estilo.input, estilo.viewTexto }>Descrição</Text>
            </View>

            <View style={ { flexDirection: 'row' } }>
              <View>
                <Text style={ estilo.input, estilo.viewTexto }>Entidade</Text>
              </View>

              <View style={ estilo.viewData }>
                <Text style={ estilo.input, estilo.viewTexto }>Data</Text>
              </View>

            </View>


          </View>


        </View>

      </View>


      <View style={ estilo.container }>
        <View
          style={ [
            estilo.viewInput,
            { backgroundColor: '#fff' },
          ] }
          />

      </View>

    </View>
  </LinearGradient>
);

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


