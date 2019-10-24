import React from 'react';
import {View, Text, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ConfirmaCadastro = () => (
    <LinearGradient
        colors={ ['#3CB371', '#2E8B57', '#008000', '#228B22'] }
        style={ estilos.container }    
    >
        <View>
            <Text>AAA</Text>
        </View>
    </LinearGradient>

);

const estilos = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
      },
})