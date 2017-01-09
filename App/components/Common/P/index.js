import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const P = ({children, textAlign, style}) =>
  <View style={styles.container}>
    <Text style={[styles.text, {textAlign}, style]}>{children}</Text>
  </View>;

P.defaultProps = {
  textAlign: 'left'
};

P.propTypes = {
  children: React.PropTypes.node.isRequired,
  textAlign: React.PropTypes.oneOf(['center', 'left', 'right', 'justify', 'auto'])
};

export default P;
