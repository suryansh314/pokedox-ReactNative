import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/FontAwesome';

import Images from '../assets/images/index';

export default function PockemonInfo(props) {
  const data = props.item;
  const url = data.item.url;

  const [info, setInfo] = useState(null);
  useEffect(() => {
    const fetchInfo = async () => {
      fetch(`${url}`)
        .then((res) => res.json())
        .then((result) => {
          setInfo(result);
        })
    };
    fetchInfo();
    
  }, []);


  return (
    <View>
      {info ? (
        <ScrollView>
          <SafeAreaView
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderWidth: 1,
                  padding: 5,
                  margin: 10,
                  backgroundColor: 'lightgray',
                }}>
                <View>
                  <Image
                    source={Images.[`${info.name}`]}
                    resizeMode="contain"
                    style={{ width: 100, height: 100 }}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <Text>{info.name}</Text>
                  </View>
                </View>
              </View>

                <View style={{
                  backgroundColor: '#9CC0E7',
                  flex: 1,
                  margin: 10,
                  borderWidth: 2,
                  padding: 5,
                }}>
                <Text>ID: {info.id}</Text>
                <Text>Base Experience: {info.base_experience}</Text>
                <Text>Height: {info.height}</Text>
                <Text>Weight: {info.weight}</Text>
                </View>
          </SafeAreaView>
        </ScrollView>
      ) : (
        <View style={{alignItems: 'center'}}><Text>Loading...</Text></View>
      )}
    </View>
  );
}
