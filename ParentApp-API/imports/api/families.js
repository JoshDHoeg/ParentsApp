// imports/api/familes.js

import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor'; // ADD THIS

const Families  = new Mongo.Collection('families');

// ADD THIS
Meteor.methods({
  'Families.addOne': ({ lastName }) => {
    const email = 'dude@gmail.com';
    const phone = '50595959595';
    const notes = 'there are tones of things i would liek to say about this family that i wont because we are suppoe to be firneds with them.'
    return Families.insert({ lastName, email, phone, notes });
  },
});

Meteor.publish('families', () => {
  return Families.find();
});

export default Families;
