import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleSheet, {estilos} from '../../styles/styles';
import {PricingCard} from 'react-native-elements';
import {total} from '../../service/api';
import LoaderComponent from '../../components/LoaderComponent';


export function navigationOptions({navigation}) {
  return {
    title: 'Menu Inicial',
    headerVisible: false,
  }
}

const MenuPrincipal = props => {
  const {navigate} = props.navigation;
  const [totals, setTotals] = useState({})
  const [visible, setVisible] = useState(false);


  const totalSistema = () => {
    setVisible(true);
    total().then((result) => {
      setTotals(result);
      setVisible(false);
    }).catch((e) => {
      setVisible(false);
    })
  }

  useEffect(() => {
    totalSistema();
  }, [total])

  return (
    <LinearGradient
      colors={['#3CB371', '#2E8B57', '#008000', '#228B22']}
      style={estilos.container}
    >
      {visible && <LoaderComponent visible={visible} />}
      <ScrollView>
        <View>
          <PricingCard
            button={{title: 'Ir Entidades Cadastradas', icon: 'flight-takeoff'}}
            color="#228B22"
            info={['Total Cadastrado']}
            onButtonPress={()=> {navigate('entidades')}}
            price={totals.totalEntidades}
            title="Entidades"
          />
        </View>
        <View>
          <PricingCard
            button={{title: 'Ir Doações Cadastradas', icon: 'flight-takeoff'}}
            color="#228B22"
            info={['Total de Doações']}
            onButtonPress={()=> {navigate('doar')}}
            price={totals.totalDoacaoCount}
            title="Doações"
          />
        </View>
        <View>
          <PricingCard
            button={{title: 'Ir Minhas Doações', icon: 'flight-takeoff'}}
            color="#228B22"
            info={['Total de Doações Realizadas']}
            onButtonPress={()=> {navigate('doados')}}
            price={totals.totalDoado}
            title="Minhas Doações"
          />
        </View>
        <View>
          <PricingCard
            button={{title: 'Ir Doações Solicitadas', icon: 'flight-takeoff'}}
            color="#228B22"
            info={['Total de Doações Solicitadas']}
            onButtonPress={()=> {navigate('pedidos')}}
            price={totals.totalRecibo}
            title="Doações Solicitadas"
          />
        </View>
      </ScrollView>

    </LinearGradient>

  )
}

const MenuPrincipalScreen = {
  screen: MenuPrincipal,
  navigationOptions
}


export default MenuPrincipalScreen;
