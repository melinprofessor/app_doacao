import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../views/LoginScreen';
import MenuPrincipalScreen from '../views/menuPrincipal/MenuPrincipalScreen';
import CadastroScreen from '../views/CadastroScreen';
import ConfirmaCadastroScreen from '../views/ConfirmaCadastroScreen';
import EsqueceuSenhaScreen from '../views/EsqueceuSenhaScreen';
import DoarScreen from '../views/DoarScreen';

const createDrawer = createDrawerNavigator({
  menu: MenuPrincipalScreen,
});

const createStack = createStackNavigator({
  doar: DoarScreen,
  login: LoginScreen,
  cadastro: CadastroScreen,
  confirmaCadastro: ConfirmaCadastroScreen,
  esqueceuSenha: EsqueceuSenhaScreen,
  drawer: {
    screen: createDrawer,
    navigationOptions: {
      header: null
    },
  }
});

export default createAppContainer(createStack);
