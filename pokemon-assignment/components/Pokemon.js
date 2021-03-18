import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite, pockemonInfo } from '../store/actions/pokemon';

import Icon from 'react-native-vector-icons/FontAwesome';
import Images from '../assets/images/index';

export default function Pokemon(props) {
  const dispatch = useDispatch();

  const [data, setData] = useState(null);
  const [fav, setFav] = useState([]);

  const toggleFavHandler = () => {
    dispatch(toggleFavorite(fav));
  };

  useEffect(() => {
    const fetchData = async () => {
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`)
        .then((res) => res.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, []);

  return (
    <View>
      {data ? (
        <ScrollView>
          <SafeAreaView
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
            {data.results.map((item) => (
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderWidth: 1,
                  padding: 5,
                  margin: 10,
                  backgroundColor: 'lightgray',
                }}>
                <TouchableOpacity
                  style={{}}
                  onPress={() => {
                    props.navigation.navigate('Pokemon', { term: { item } });
                  }}>
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
                      onPress={() => {
                        setFav((prevArray) => [...prevArray, item]);
                        toggleFavHandler();
                      }}>
                      <Icon name="heart" size={15} color="white" />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </SafeAreaView>
        </ScrollView>
      ) : (
        <View style={{alignItems: 'center'}}><Text>Loading...</Text></View>
      )}
    </View>
  );
}
