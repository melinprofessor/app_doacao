import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ItensComponent = props => {
  return (
    <View style={ estilo.container }>
      <View style={ estilo.detalhes }>
        <Text style={ estilo.titulo }>{props.titulo}</Text>
        <Text>{props.endereco}</Text>
        <Text>{props.descricao}</Text>
        <Text>{props.telefone}</Text>
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
    flexDirection: 'row',
    borderRadius: 10,
  },
  detalhes: {
    flex: 1.5,
  },
  titulo: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5,
  },
  valor: {
    color: 'green',
  },
});
export default ItensComponent;
