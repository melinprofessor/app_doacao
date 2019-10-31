import React from 'react';
import { View, Text, TextInput, Platform, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet, { estilos } from '../styles/styles';
import ButtonAndroidComponent from '../components/ButtonAndroidComponent';
import ButtonIOSComponent from '../components/ButtonIOSComponent';
import Textarea from 'react-native-textarea';


export function navigationOptions({ navigate }) {
  return {
    title: 'Doados_Screen',
    header: null,
  };
}
  

const ButtonComponent = Platform.select({
  ios: () => ButtonIOSComponent,
  android: () => ButtonAndroidComponent,
})();


const Doados_Screen = props => (
    <LinearGradient
      colors={ ['#3CB371', '#2E8B57', '#008000', '#228B22'] }
      style={ estilos.container }
    >
      <View style={ [estilos.container, { justifyContent: 'space-around' }] }>
        <View style={ estilo.container }>
          <View /*style={ estilo.viewTexto }*/>
            <Text style={ estilo.fonte }>Produtos doados</Text> 

           <View style={estilo.input}>
           <TextInput placeholder="e-mail" style={ estilo.input } /> 
           </View>

           <View style={estilo.input}>
            <TextInput placeholder="e-mail" style={ estilo.input } /> 
          </View>

        </View>
  



        <View style={ estilo.container }>
          <View
            style={ [
              estilo.viewInput,
              { backgroundColor: '#fff', borderRadius: 20 },
            ] }
          >
             

          </View>
          {/* <ButtonComponent title="CONFIRMAR" /> */}
        </View>
        <View style={ estilo.container }>
          <Text style={ estilo.fonte2 } />
        </View>
      </View>
    </LinearGradient>
);
  
const DoadosScreen = {
  screen: Doados_Screen,
  navigationOptions,
};
  
const estilo = StyleSheet.create({
  fonte: {
    color: '#fff',
    fontSize: 35,
    paddingTop: 100,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewTexto: {
    borderLeftWidth: 10,
    borderLeftColor: '#fff',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 15,
  },
  viewInput: {
    width: '75%',
   
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    height: 45,
  },
  colorButton: {
    backgroundColor: '#fff',
  },

 
});


export default DoadosScreen;



 //  Style={estilo.textareaContainer}
 //  style={estilo.textarea}

                
// <TextInput placeholder="e-mail" style={ estilo.input } /> 
