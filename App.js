import React from 'react';
import { Provider } from 'react-redux';
import Root from './src/navigators/Root';
import store from './src/redux/store';


export default class  extends React.Component {
  render() {
    return(
      <Provider store={store}>
        <Root/>
      </Provider>
    );
  }
}