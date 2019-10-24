import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

const InputTextComponent = (props) => (
  <View style={ estilo.viewContainer }>
    <TextInput placeholder={ props.placeholder } style={ estilo.input } />
  </View>
);

const estilo = StyleSheet.create({
  viewContainer: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    height: 45,
  },
});

export default InputTextComponent;
