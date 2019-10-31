import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../views/LoginScreen';
import DoadosScreen from '../views/DoadosScreen';

const createStack = createStackNavigator({
  doados: DoadosScreen,
  login: LoginScreen,
});

export default createAppContainer(createStack);
