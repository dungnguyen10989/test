import React from 'react';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import {connect} from 'react-redux';
import Main from '../screens/Main';
import Profile from '../screens/Profile';

const routeConfig = {
  Main: { screen: ({ navigation, screenProps }) => <Main />},
  Profile: { screen: ({ navigation, screenProps }) => <Profile navigation={navigation}/> }
}

export const AuthNav = StackNavigator(routeConfig)

class Auth extends React.Component {
  render() {
    return (
      <AuthNav navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props._authNav,
      })} />
    );
  }
}

const mapStateToProps = state => ({ _authNav: state._authNav })

export default connect(mapStateToProps)(Auth);