import React from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import {connect} from 'react-redux';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const routeConfig = {
  SignIn: { screen: ({ navigation, screenProps }) => <SignIn navigation={navigation}/> },
  SignUp: { screen: ({ navigation, screenProps }) => <SignUp navigation={navigation}/> }
}

export default UnAuth = StackNavigator(routeConfig);
