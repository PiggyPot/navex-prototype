import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';


const Loader = () =>
  <View style={styles.container}>
    <ActivityIndicator />
  </View>;

export default Loader;
