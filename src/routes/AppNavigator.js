import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../views/LoginScreen';
import ConfirmaCadastroScreen from '../views/ConfirmaCadastroScreen';

const createStack = createStackNavigator({
  login: LoginScreen,
  confirmaCadastro: ConfirmaCadastroScreen,
});

export default createAppContainer(createStack);
