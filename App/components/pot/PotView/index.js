import React from 'react';
import { View, Text } from 'react-native';
import P from '../../Common/P';
import { jumpTo } from '../../../actions/navActions';
import CurrencyFormatter from '../../Common/CurrencyFormatter';

const PotView = (props) => {
  return (
    <View>
      <P>{props.data.pot.title}</P>
        <CurrencyFormatter value={props.data.pot.balance} currencySymbol="£" />
      <P>
        <CurrencyFormatter value={props.data.pot.savingsTarget} currencySymbol="£" />
      </P>
      {/* <Text onPress={() => props.dispatch(jumpTo('Pots'))}>Home page</Text> */}
    </View>
  );
};

PotView.propTypes = {

};

export default PotView;
