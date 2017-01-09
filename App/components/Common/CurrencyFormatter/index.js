import React, {Component} from 'react';
import {Text} from 'react-native';
import styles from './styles';

class CurrencyFormatter extends Component {
  padNumber() {
    if (!this.props.value) {
      return '0';
    }

    const unpaddedNumber = this.props.value.toString().split('');

    if (unpaddedNumber[unpaddedNumber.length - 1] === '0' && unpaddedNumber[unpaddedNumber.length - 2] === '0') {
      unpaddedNumber.splice(unpaddedNumber.length - 2, 2);

      return unpaddedNumber.join('');
    }

    if (unpaddedNumber.length > 2) {
      unpaddedNumber.splice(unpaddedNumber.length - 2, 0, '.');

      return unpaddedNumber.join('');
    }

    if (unpaddedNumber.length === 2) {
      unpaddedNumber.splice(unpaddedNumber.length - 2, 0, '0.');

      return unpaddedNumber.join('');
    }

    if (unpaddedNumber.length === 1) {
      unpaddedNumber.splice(unpaddedNumber.length - 2, 0, '0.0');

      return unpaddedNumber.join('');
    }

    if (unpaddedNumber.length === 0) {
      return '0.00';
    }
  }

  render() {
    const symbol = this.props.currencySymbol ? this.props.currencySymbol : '';

    return (
      <Text style={[styles.text, this.props.style]}>
        {symbol}{this.padNumber()}
      </Text>
    );
  }
}

CurrencyFormatter.propTypes = {
  value: React.PropTypes.number,
  currencySymbol: React.PropTypes.string,
  style: React.PropTypes.any
};

export default CurrencyFormatter;
