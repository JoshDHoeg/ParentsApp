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
    const name = this.state.name;
    Meteor.call('Families.addOne', { name }, (err, res) => {
      // Do whatever you want with the response
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
          <Text>Add Family</Text>
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
