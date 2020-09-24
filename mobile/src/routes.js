import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import homeScreen from './pages/homeScreen';
import Register from './pages/Register';
import Login from './pages/Login';
import List from './pages/List';
import Book from './pages/Book';
import Facebook from './pages/Facebook';
import Order from './pages/Order';

const Routes = createAppContainer(
    createSwitchNavigator({
        homeScreen,
        Login,
        Register,
        Facebook,
        List,
        Book,
        Order
    })
);

export default Routes;