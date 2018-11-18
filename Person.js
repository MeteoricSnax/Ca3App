import React, {Component} from 'react';
import { Text, View} from 'react-native';
export default function Person(props) {
  const { person } = props;
  return (<View>
    <View><Text style={{ fontWeight: 'bold' }}>{person.name}</Text></View>
    <View><Text>{person.height}</Text></View>
    <View><Text>{person.mass}</Text></View>
    <View><Text>{person.hair_color}</Text></View>
    <View><Text>{person.skin_color}</Text></View>
    <View><Text>{person.eye_color}</Text></View>
    <View><Text>{person.birth_year}</Text></View>
    <View><Text>{person.gender}</Text></View>
    <View><Text>{person.homeworld}</Text></View>
    <View><Text>{person.films}</Text></View>
    <View><Text>{person.species}</Text></View>
    <View><Text>{person.vehicles}</Text></View>
    <View><Text>{person.starships}</Text></View>
    <View><Text>{person.created}</Text></View>
    <View><Text>{person.edited}</Text></View>
    <View><Text>{person.url}</Text></View>
  </View>
  );
}