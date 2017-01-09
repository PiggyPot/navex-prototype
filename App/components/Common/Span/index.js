import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Span = ({children, style}) =>
  <Text style={[styles.text, style]}>{children}</Text>;

Span.propTypes = {
  children: React.PropTypes.node.isRequired
};

Span.displayName = 'Span';

export default Span;
