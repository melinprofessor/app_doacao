import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

const AreaTextComponent = (props) => (
  <View style={estilo.viewContainer}>
    <TextInput
      autoCapitalize='none'
      autoCorrect={false}
      multiline
      numberOfLines={6}
      onChangeText={(text) => props.setValue(text)}
      placeholder={props.placeholder}
      style={estilo.input}
      value={props.value}
    />
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
    height: 150,
    textAlignVertical: 'top'
  },
});

export default AreaTextComponent;
