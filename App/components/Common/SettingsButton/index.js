import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const SettingsButton = ({onPress, buttonStyle}) => {
  return (
  <TouchableOpacity
    style={[styles.settingsButton, buttonStyle]}
    onPress={() => onPress()}
    accessibilityLabel="App settings"
    accessibilityTraits="button"
  >
    <Image source={require('./img/settings-icon.png')} style={[styles.settingsButtonImage]}/>
  </TouchableOpacity>
);
};

export default SettingsButton;
