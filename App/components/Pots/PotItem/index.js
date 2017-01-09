import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './styles.js';
import H1 from '../../Common/H1';
import P from '../../Common/P';
import transitionToPot from '../../../actions/pot/transitionPot';
import CurrencyFormatter from '../../Common/CurrencyFormatter';
import { connect } from 'react-redux';

const PotItem = ({dispatch, pot}) => {
  return (
    <TouchableOpacity onPress={() => dispatch(transitionToPot(pot.id))}>
        <View style={styles.container}>
          <View style={styles.progressBar}>
            <Text>P</Text>
          </View>

          <View>
            <H1 style={styles.title}>{pot.title}</H1>
            <P>
              <CurrencyFormatter value={pot.balance} currencySymbol="£" style={styles.balance} />
              {' of '}
              <CurrencyFormatter value={pot.savingsTarget} currencySymbol="£" style={styles.savingsTarget}/>
            </P>
          </View>

          <View style={styles.arrow}>
            <Image source={require('./img/item-arrow.png')} style={styles.image}/>
            <P style={styles.percentage}>10%</P>
          </View>
        </View>
      </TouchableOpacity>
    );
};

PotItem.propTypes = {
  pot: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    savingsTarget: React.PropTypes.number.isRequired
  })
};

export default connect()(PotItem);
