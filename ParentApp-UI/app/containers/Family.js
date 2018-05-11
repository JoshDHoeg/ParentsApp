import React from 'react';
import { StyleSheet, Text, View, ListView, TouchableOpacity, TextInput } from 'react-native';
import Meteor from 'react-native-meteor';


export default class Family extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  handleAddItem() {
    const name = Math.floor(Math.random() * 10); // just generate some random number
    Meteor.call('Families.addOne', this.state.name, (err, res) => {
      // Do whatever you want with the response
      console.log(this.state.name);
      console.log('Families.addOne', err, res);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Fuck there are Families</Text>
        <TextInput
          style={{height: 40}}
          placeholder="Family Name!"
          onChangeText={(name) => this.setState({name})}
        />
        <TouchableOpacity style={styles.button} onPress={this.handleAddItem}>
          <Text>{this.state.name}</Text>
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
