import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ItensComponentButton = props => {
  return (
    <View style={ estilo.container }>
      <View style={ estilo.detalhes }>
        <Text style={ estilo.entidade }>{props.entidade}</Text>        
        <Text style={ estilo.endereco }>{props.endereco}</Text>
        <View style={ estilo.linha } />
        <Text style={ estilo.descricao }>{props.descricao}</Text>
        <View style={ estilo.linha } />
        <View style={ estilo.telefone }>
          <Icon color="#000" name='phone'  size={ 20 } />
          <Text style={ estilo.telefoneText }>{props.telefone}</Text>
        </View>        
      </View>      
    </View>
    
  );
};

const estilo = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: '#999',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    flexDirection: 'column',
    borderRadius: 10,
  },
  entidade: {
    fontSize: 18,
    color: '#304250',
    marginBottom: 5,
  },
  endereco: {

  },
  descricao: {

  },
  telefone: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  telefoneText: {
    marginLeft: 5,
  },
  linha: {
    backgroundColor: '#000',
    borderTopWidth: 1,    
    marginVertical: 5,
  },
});
export default ItensComponentButton;
