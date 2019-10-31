import React from 'react';
import { Alert } from 'react-native';

const AlertComponent = (title, message, buttons) =>
setTimeout(() => {
  Alert.alert(
    title,
    message,
    buttons
)
}, 10)


export default AlertComponent;
