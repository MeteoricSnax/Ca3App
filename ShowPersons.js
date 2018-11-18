import React, {Component} from 'react';
import { StyleSheet,Text, View } from 'react-native';
import PersonList from "./PersonList"

//write ipv4 address here

const url = 'https://albertvandel.dk/jwtBackend-1.0-SNAPSHOT/api/person/unprotected'

export default class ShowPersons extends React.Component {
  constructor(props) {
    super(props);
    this.state= {persons: []}
  }

  async componentDidMount() {
    //This would be the perfect place to fetch persons from the API
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    this.setState({persons: data})
  }
  
  render() {
    return (
      <View style={styles.container}>
        <PersonList persons={this.state.persons} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});



