import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Meteor, { createContainer } from 'react-native-meteor';
import Family from './app/containers/Family.js'

const SERVER_URL = 'ws://localhost:3000/websocket';

class App extends React.Component {
  componentWillMount() {
    Meteor.connect(SERVER_URL);  
  }

  render() {
    return (
      <Family count={ this.props.count } />
    );
  }
}


export default createContainer((props) => {
  
  Meteor.subscribe('items');
  return {
    count: Meteor.collection('items').find().length,
  };
}, App);