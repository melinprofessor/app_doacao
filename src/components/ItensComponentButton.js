import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ItensComponentButton = props => {
  return (
    <View style={estilo.container}>
      <View style={estilo.detalhes}>
        <Text style={{fontWeight: 'bold'}}>Produto</Text>
        <Text style={estilo.entidade}>{props.item.products.titulo}</Text>

        <View style={[estilo.linha]} />
        <View style={{height: 120}}>
          <Text style={{fontWeight: 'bold'}}>Detalhes do Produto</Text>
          <Text style={estilo.descricao}>{props.item.products.detalhes}</Text>
        </View>
        <View style={estilo.linha} />
        <View style={estilo.telefone}>
          <View>
            <Text style={{fontWeight: 'bold'}}>Entidade</Text>
            <Text>{props.item.entidadeDoadora && props.item.entidadeDoadora.name || 'NDA'}</Text>
          </View>
          <View style={{width:150}}>
            <TouchableOpacity style={{backgroundColor: '#2E8B57',borderWidth:1, borderRadius:5, alignItems:'center'}}>
              <Text style={{color: '#fff', fontSize: 25, textAlign: 'center', fontWeight: 'bold'}}>Solicitar</Text>
              <Icon color="#fff" name='redeem' size={30} />
            </TouchableOpacity>
          </View>
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
    justifyContent: 'space-between',
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
