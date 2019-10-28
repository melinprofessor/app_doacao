import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../views/LoginScreen';
import ConfirmaEmailScreen from '../views/ConfirmaEmailScreen';

const createStack = createStackNavigator({
  confirmaEmail: ConfirmaEmailScreen,
  login: LoginScreen,
});

export default createAppContainer(createStack);
