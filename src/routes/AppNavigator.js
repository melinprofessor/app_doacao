import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import LoginScreen from '../views/LoginScreen';
import DoarScreen from '../views/DoarScreen';

const createStack = createStackNavigator({
  doar: DoarScreen,
  login: LoginScreen,
});

export default createAppContainer(createStack);
