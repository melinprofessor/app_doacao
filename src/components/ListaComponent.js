import React, {useState} from 'react';
import {View} from 'react-native';
import ItensComponent from './ItensComponent';
import ItensComponentButton from './ItensComponentButton';

const listaItensMockup =
[
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
];
const ListaComponent = (props) => {


  // active: true
  // createdAt: "2019-11-06T23:02:15.006Z"
  // entidadeDoadora:
  // active: true
  // name: "TESTE"
  // _id: "5dc34eb07719fc0017851148"
  // __proto__: Object
  // products: {titulo: "sdasda", detalhes: "asdasda"}
  // __v: 0
  // _id: "5dc350f729a23e001791d2c8"

  if (props.tipo === 'entidades') {
    return (
      <View>
        {props.list.map(item => (
          <ItensComponent
            descricao={item.description}
            endereco={item.address}
            entidade={item.name}
            key={item._id}
            telefone={item.contact}
          />
        ))}
      </View>
    );
  } else if(props.tipo==='solicitar') {
    return (
      <View>
        {props.list.map(item => (
          <ItensComponentButton
            item={item}
            key={item._id}
          />
        ))}
      </View>
    );
  }
}

export default ListaComponent;
