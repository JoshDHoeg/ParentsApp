// imports/api/familes.js

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor'; // ADD THIS

const Families  = new Mongo.Collection('families');

// ADD THIS
Meteor.methods({
  'Families.addOne': ({ name }) => {
    return Families.insert({ name });
  },
});

Meteor.publish('families', () => {
  return Families.find();
});

export default Families;
