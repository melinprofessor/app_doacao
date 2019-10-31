import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../views/LoginScreen';
import EntidadesScreen from '../views/EntidadesScreen';

const createStack = createStackNavigator({
  //login: LoginScreen,
  entidades: EntidadesScreen,
});

export default createAppContainer(createStack);
