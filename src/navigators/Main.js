import React from 'react';
import { TabNavigator, addNavigationHelpers } from 'react-navigation';
import {connect} from 'react-redux';

import Tab1 from '../screens/Tab1'
import Tab2 from '../screens/Tab2'

const routeConfig = {
  Tab1: { screen: ({ navigation, screenProps }) => <Tab1/> },
  Tab2: { screen: ({ navigation, screenProps }) => <Tab2 /> }
}

const navConfig = {

}

export default Main = TabNavigator(routeConfig)