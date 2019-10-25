import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../views/LoginScreen';
import CadastroScreen from '../views/CadastroScreen';

const createStack = createStackNavigator({
  //login: LoginScreen,
  cadastro: CadastroScreen,
});

export default createAppContainer(createStack);
