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
      {
        entidade: 'Igreja Batista',
        endereco: 'Rua José Manoel, 188, Bebedouro - SP',
        descricao: 'Valoriza as boas práticas, a bondade de coração e um espírito calmo.',
        telefone: '+551733458774',
      },
      {
        entidade: 'Basílica de São Pedro',
        endereco: 'Rua José Manoel, 188, Bebedouro - SP',
        descricao: 'Valoriza as boas práticas, a bondade de coração e um espírito calmo.',
        telefone: '+551733458774',
      },
      {
        entidade: 'Capela Sistina',
        endereco: 'Rua José Manoel, 188, Bebedouro - SP',
        descricao: 'Valoriza as boas práticas, a bondade de coração e um espírito calmo.',
        telefone: '+551733458774',
      },
      {
        entidade: 'Igreja do Vaticano',
        endereco: 'Rua José Manoel, 188, Bebedouro - SP',
        descricao: 'Valoriza as boas práticas, a bondade de coração e um espírito calmo.',
        telefone: '+551733458774',
      },
    ]};
  }

  render() {
    return (
      <View>
        {this.state.listaItens.map(item => (
          <ItensComponent
            key={ item.entidade }
            entidade={ item.entidade }
            endereco={ item.endereco }
            descricao={ item.descricao }
            telefone={ item.telefone }
          />
        ))}
      </View>
    );
  }
}
