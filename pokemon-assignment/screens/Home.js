import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Pokemon from '../components/Pokemon';

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'gray',
            alignItems: 'center',
            marginHorizontal: 'auto',
          }}
          onPress={() => navigation.navigate('Favourite')}>
          <Text>Tap to view Favourites (Add atleast 2)</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{margin: 10}}>
        <Pokemon navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
  );
}
