import React, { Component } from 'react';
import { InAppNotificationProvider } from 'react-native-in-app-notification';

import Chat from './components/chat'

export default class App extends Component {
	render() {
		return (
      <InAppNotificationProvider>
        <Chat />
      </InAppNotificationProvider>
    )
	}
}