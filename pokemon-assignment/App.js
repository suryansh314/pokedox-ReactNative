import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import Home from './screens/Home';
import Favourite from './screens/Favourite';
import Pokemon from './screens/Pokemon';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import pokemonReducer from './store/reducers/pokemon';

const Stack = createStackNavigator();

const rootReducer = combineReducers({
  pokemons: pokemonReducer
});
const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: true }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Pokemon" component={Pokemon} />
        <Stack.Screen name="Favourite" component={Favourite} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
