import React from 'react';
import { View, TouchableOpacity, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'UnAuth' })
  ]
})


const navigateAction = NavigationActions.navigate({
  routeName: 'Main'
})


class Profile extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'aqua' }}>
        <Text
          style={{
            padding: 10,
            fontSize: 25,
            backgroundColor: 'black',
            color: 'yellow'
          }}
        >
          Profile
        </Text>
        <Button
          title='reset to UnAuth'
          onPress={() => this.props.dispatch(resetAction)}
        />

        <Button
          title='navigato Main'
          onPress={() => this.props.navigation.dispatch(navigateAction)}
        />
      </View>
    );
  }
}
export default connect()(Profile);