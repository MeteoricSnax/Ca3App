import React, {Component} from 'react';
import { Text, View, FlatList } from 'react-native';
import Person from "./Person";
export default function PersonList(props) {
  const { persons } = props;
  return (<View>
    <FlatList data={persons} renderItem={({item}) => <Person person={item}/>} keyExtractor={ (item, index) => index.toString()}/>
  </View>);
}