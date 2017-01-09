import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import P from '../../Common/P';

const SettingsView = ({user, dispatch}) =>
  <View style={styles.container}>
    <P>Settings View</P>
  </View>;

export default SettingsView;

SettingsView.propTypes = {
  user: React.PropTypes.object.isRequired,
  dispatch: React.PropTypes.func.isRequired,
  showIdentityVerification: React.PropTypes.bool.isRequired
};
