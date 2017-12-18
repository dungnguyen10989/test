import React from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import {connect} from 'react-redux';
import Auth from './Auth';
import UnAuth from './UnAuth';
//import Auth2 from './Auth2';

const routeConfig = {
  Auth: { screen: ({ navigation }) => <Auth/> },
  UnAuth: { screen: ({ navigation, screenProps }) => <UnAuth /> }
}

const navConfig = {
  navigationOptions : {
    header: null
  }
}

export const RootNav = StackNavigator(routeConfig, navConfig)

class Root extends React.Component {
  render() {
    return (
      <RootNav navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props._rootNav,
      })} />
    );
  }
}

const mapStateToProps = state => ({ _rootNav: state._rootNav })

export default connect(mapStateToProps)(Root);