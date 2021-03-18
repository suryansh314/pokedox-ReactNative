import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import PokemonInfo from '../components/PokemonInfo';

export default function Pokemon({navigation, route}){
  var item = route.params.term;
  return (
    <SafeAreaView>
    <View><PokemonInfo item={item}/></View>
    </SafeAreaView>
  )
}