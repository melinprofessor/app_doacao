import React, {Component} from 'react';
import {View} from 'react-native';
import ItensComponent from './ItensComponent';

export default class ListaComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {listaItens: [
      {
        entidade: 'Igreja São José',
        endereco: 'Rua José Mazeo, 124, Bebedouro - SP',
        descricao: 'A igreja procura desde a sua fundação ajudar as pessoas e entidades da cidade de Bebedouro.',
        telefone: '+551733457458',
      },
      {
        entidade: 'Centro Espírita Bebedouro',
        endereco: 'Rua Episcopal, 548, Bebedouro - SP',
        descricao: 'O centro procura a elevação do espírito de cada um do seus participantes por boas ações na sociedade.',
        telefone: '+5517984574848',
      },
    ]};
  }

  render() {
    return (
      <View>
        {this.state.listaItens.map(item => (
          <ItensComponent
            key={ item.entidade }
            titulo={ item.entidade }
            endereco={ item.endereco }
            descricao={ item.descricao }
            telefone={ item.telefone }
          />
        ))}
      </View>
    );
  }
}
