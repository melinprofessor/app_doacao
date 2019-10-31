import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../views/LoginScreen';
import SolicitarScreen from '../views/SolicitarScreen';

const createStack = createStackNavigator({
  solicitar: SolicitarScreen,  
  login: LoginScreen,
});

export default createAppContainer(createStack);
