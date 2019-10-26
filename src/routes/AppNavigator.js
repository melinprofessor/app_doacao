import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../views/LoginScreen';
import MenuPrincipalScreen from '../views/menuPrincipal/MenuPrincipalScreen';
import CadastroScreen from '../views/CadastroScreen';
import ConfirmaCadastroScreen from '../views/ConfirmaCadastroScreen';

const createDrawer = createDrawerNavigator({
  menu: MenuPrincipalScreen,
});

const createStack = createStackNavigator({
  login: LoginScreen,
  cadastro: CadastroScreen,
  confirmaCadastro: ConfirmaCadastroScreen,
  drawer: {
    screen: createDrawer,
    navigationOptions: {
      header: null
    },
  }
});

export default createAppContainer(createStack);
