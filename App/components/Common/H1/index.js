import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const H1 = ({children, textAlign, style, containerStyle}) =>
  <View style={[styles.container, containerStyle]}>
    <Text style={[styles.text, {textAlign}, style]}>{children}</Text>
  </View>;

H1.defaultProps = {
  textAlign: 'left'
};

H1.propTypes = {
  children: React.PropTypes.node.isRequired,
  textAlign: React.PropTypes.oneOf(['center', 'left', 'right', 'justify', 'auto'])
};

export default H1;
