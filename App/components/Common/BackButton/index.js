import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styles from './styles';

const BackButton = ({callback}) => {
  return (
    <TouchableOpacity
    style={[styles.backButton]}
    onPress={() => callback}
    accessibilityLabel="Go back"
    >
    <Image source={require('./img/back-arrow.png')} style={[styles.settingsButtonImage]}/>
    </TouchableOpacity>
  );
};

BackButton.propTypes = {
  callback: React.PropTypes.func
};

export default BackButton;
