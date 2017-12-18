import React from 'react';
import { View, TouchableOpacity, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Auth' })
  ]
})


const navigateAction = NavigationActions.navigate({
  routeName: 'SignIn'
})


class SignUp extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'violet' }}>
        <Text
          style={{
            padding: 10,
            fontSize: 25,
            backgroundColor: 'black',
            color: 'yellow'
          }}
        >
          SignUp
        </Text>
        <Button
          title='reset to Auth'
          onPress={() => this.props.dispatch(resetAction)}
        />

        <Button
          title='navigato Sign In'
          onPress={() => this.props.navigation.dispatch(navigateAction)}
        />
      </View>
    );
  }
}
export default connect()(SignUp);