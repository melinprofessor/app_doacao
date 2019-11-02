import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../views/LoginScreen';
import PedidosScreen from '../views/PedidosScreen';

const createStack = createStackNavigator({
  pedidos: PedidosScreen,
  login: LoginScreen,
 
});

export default createAppContainer(createStack);
