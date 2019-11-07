import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ItensDoadosComponent = props => {
  return (
    <View style={estilo.container}>
      <Text style={estilo.produto}>{props.produto}</Text>
      <View style={estilo.linha} />
      
      <Text style={estilo.descricao}>{props.descricao}</Text>
      <View style={estilo.linha} />
      <View style={estilo.etidadeEndereco}>
        <Text>{props.entidade}</Text>
        <Text>{props.createdAt}</Text>
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
  produto: {
    fontSize: 18,
    color: '#304250',
    marginBottom: 5,
  },
  descricao: {

  },
  etidadeEndereco: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  linha: {
    backgroundColor: '#000',
    borderTopWidth: 1,    
    marginVertical: 5,
  },
});
export default ItensDoadosComponent;
