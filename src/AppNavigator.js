import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import Home from './Screens/Home';
import MyAddress from './Screens/MyAddress';
import AddAddress from './Screens/AddAddress';
import Checkout from './Screens/Checkout';
import OrderSucess from './OrderSucess';
import Orders from './Screens/Orders';
import Offers from '../src/Screens/Offers'
import Jackets from './components/Jackets';
import Jeans from './components/Jeans';
import Shirts from './components/Shirts';
import Shoes from './components/Shoes';
import Slippers from './components/Slippers';
import TShirts from './components/TShirts';
import Trousers from './components/Trousers';
const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Signup"
          component={Signup}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="MyAddress"
          component={MyAddress}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="AddAddress"
          component={AddAddress}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Checkout"
          component={Checkout}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="OrderSuccess"
          component={OrderSucess}
        />
          <Stack.Screen
          options={{headerShown: false}}
          name="Orders"
          component={Orders}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="Offers"
          component={Offers}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="Jackets"
          component={Jackets}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="Jeans"
          component={Jeans}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Shirts"
          component={Shirts}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Shoes"
          component={Shoes}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="Slippers"
          component={Slippers}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="TShirts"
          component={TShirts}
        />
         <Stack.Screen
          options={{headerShown: false}}
          name="Trousers"
          component={Trousers}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
