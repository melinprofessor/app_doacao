import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../views/LoginScreen';
import InfoScreen from '../views/InfoScreen';

const createStack = createStackNavigator({
  Info: InfoScreen,
  login: LoginScreen,
});

export default createAppContainer(createStack);
