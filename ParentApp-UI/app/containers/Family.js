import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Meteor from 'react-native-meteor';


export default class Family extends React.Component {
  handleAddItem() {
    const name = Math.floor(Math.random() * 10); // just generate some random number
    Meteor.call('Items.addOne', { name }, (err, res) => {
      // Do whatever you want with the response
      console.log('Items.addOne', err, res);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Fuck there are { this.props.count } items</Text>
        <TouchableOpacity style={styles.button} onPress={this.handleAddItem}>
          <Text>Add Item</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: '#c5c5c5',
  },
});
