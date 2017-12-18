import React from 'react';
import { View, TouchableOpacity, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Main' })
  ]
})


const navigateAction = NavigationActions.navigate({
  routeName: 'SignUp'
})


class SignIn extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'lightblue' }}>
        <Text
          style={{
            padding: 10,
            fontSize: 25,
            backgroundColor: 'black',
            color: 'yellow'
          }}
        >
          SignIn
        </Text>
        <Button
          title='reset to Auth'
          onPress={() => this.props.dispatch(resetAction)}
        />

        <Button
          title='navigato Sign Up'
          onPress={() => this.props.navigation.dispatch(navigateAction)}
        />
      </View>
    );
  }
}
export default connect(state => ({ _rootNav: state._rootNav, _authNav: state._authNav }))(SignIn);