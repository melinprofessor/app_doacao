import React from 'react';
import {
  TouchableHighlight, Text, StyleSheet, View,
} from 'react-native';

const ButtonIOSComponent = (props) => (
  <View style={ estilo.viewButton }>
    <TouchableHighlight style={ estilo.button }>
      <Text style={ estilo.buttonText }>{props.title}</Text>
    </TouchableHighlight>
  </View>
);

const estilo = StyleSheet.create({
  button: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    width: 200,
  },
  buttonText: {
    color: '#008000',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 25,
  },
  viewButton: {
    marginTop: 15,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
export default ButtonIOSComponent;
