import React from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import Images from '../assets/images/index';

export default function Fav() {
  const data = useSelector((state) => state.pokemons.pokemons);
  console.log(data)
  return (
    <View>
     {data!=0 ? (
        <ScrollView>
          <SafeAreaView
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
            {data.map((item) => (
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderWidth: 1,
                  padding: 5,
                  margin: 10,
                  backgroundColor: 'lightgray',
                }}>
                <TouchableOpacity style={{}}>
                  <Image
                    source={Images.[`${item.name}`]}
                    resizeMode="contain"
                    style={{ width: 100, height: 100 }}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>{item.name}</Text>
                    <TouchableOpacity
                      >
                      <Icon name="heart" size={15} color="black" />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </SafeAreaView>
        </ScrollView>
      ) : (
        <View style={{alignItems: 'center'}}><Text>No Favorites Added</Text></View>
      )}
    </View>
  );
}
