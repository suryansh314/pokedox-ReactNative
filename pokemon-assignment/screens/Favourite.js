import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import Pokemon from '../components/Pokemon';
import Fav from '../components/Fav'

export default function Favourite({navigation}){
  return (
    <SafeAreaView>
    <View><Fav /></View>
    </SafeAreaView>
  )
}