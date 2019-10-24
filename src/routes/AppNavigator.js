import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../views/LoginScreen';

const createStack = createStackNavigator({
  login: LoginScreen,
});

export default createAppContainer(createStack);
