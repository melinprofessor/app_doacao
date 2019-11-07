import React from 'react';
import { View, Text, TextInput, Platform, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const HeaderComponent = props => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, marginVertical: 15 }}>
      <Text onPress={() => { props.navigation.goBack ? props.navigation.goBack() : null }} style={{ color: '#fff' }}><Icon name={props.iconeNome} size={35} color="#fff" /></Text>
      <Text style={{ fontSize: 18, color: '#fff' }}>{props.nomeTitulo}</Text>
    </View>
  )
}

export default HeaderComponent;
