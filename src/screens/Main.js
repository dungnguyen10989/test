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
  routeName: 'Profile'
})


class Main extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'lightyellow' }}>
        <Text
          style={{
            padding: 10,
            fontSize: 25,
            backgroundColor: 'black',
            color: 'yellow'
          }}
        >
          Main
        </Text>
        <Button
          title='reset to UnAuth'
          onPress={() => this.props.dispatch(resetAction)}
        />

        <Button
          title='navigate to Profile'
          onPress={() => this.props.dispatch(navigateAction)}
        />
      </View>
    );
  }
}
export default connect()(Main);