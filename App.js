import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { createStackNavigator,createAppContainer } from 'react-navigation';
import ShowPersons from './ShowPersons';

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)

class HomeScreen extends React.Component {
  static navigationOptions = { title: 'CA3 App' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
        <Text style={{ textAlign: "center", fontSize: 20 }}>Welcome</Text>
        <Text style={{ textAlign: "center", fontSize: 10 }}>This is a tiny app that fetches SWAPI data from the backend</Text>
        <Touchable onPress={() => navigate('showPersons')} title="Show Star Wars Characters" />
      </View>
    )
  }
}

const RouteStack = createStackNavigator({
    Home: { screen: HomeScreen },
    showPersons: { screen: ShowPersons },
});

const AppContainer = createAppContainer(RouteStack)

export default class App extends React.Component{
    render() {
        return(<AppContainer/>)
    }    
}

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})