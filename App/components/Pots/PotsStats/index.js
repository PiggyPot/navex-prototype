import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import CurrencyFormatter from '../../Common/CurrencyFormatter';
import Span from '../../Common/Span';

class PotStats extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Span style={styles.label}>In my pots</Span>
            <Span style={styles.value}>
              £<CurrencyFormatter value={this.props.savedInOpenPots} />
            </Span>
          </View>
          <View style={styles.border} />
          <View style={styles.stat}>
            <Span style={styles.label}>Total saved</Span>
            <Span style={styles.value}>
              £<CurrencyFormatter value={this.props.savedToDate} />
            </Span>
          </View>
        </View>
      </View>
    );
  }
}

PotStats.propTypes = {
  savedInOpenPots: React.PropTypes.number.isRequired,
  savedToDate: React.PropTypes.number.isRequired
};

export default PotStats;
