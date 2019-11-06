import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../views/LoginScreen';
import MenuPrincipalScreen from '../views/menuPrincipal/MenuPrincipalScreen';
import CadastroScreen from '../views/CadastroScreen';
import ConfirmaCadastroScreen from '../views/ConfirmaCadastroScreen';
import EsqueceuSenhaScreen from '../views/EsqueceuSenhaScreen';
import DoarScreen from '../views/DoarScreen';
import SolicitarScreen from '../views/SolicitarScreen';
import EntidadesScreen from '../views/EntidadesScreen';
import ConfirmaEmailScreen from '../views/ConfirmaEmailScreen';
import InfoScreen from '../views/InfoScreen';
import DoadosScreen from '../views/DoadosScreen';
import PedidosScreen from '../views/PedidosScreen';



const createDrawer = createDrawerNavigator({
  menu: MenuPrincipalScreen,
  solicitar: SolicitarScreen,
  doar: DoarScreen,
  entidades: EntidadesScreen,
  info: InfoScreen,
  pedidos: PedidosScreen,
  doados: DoadosScreen,

});

const createStack = createStackNavigator({
  cadastro: CadastroScreen,
  confirmaCadastro: ConfirmaCadastroScreen,
  login: LoginScreen,

  esqueceuSenha: EsqueceuSenhaScreen,
  confirmaEmail: ConfirmaEmailScreen,
  drawer: {
    screen: createDrawer,
    navigationOptions: {
      header: null
    },
  }
});

export default createAppContainer(createStack);
