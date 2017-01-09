import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PotView from '../components/pot/PotView';
import { getPot, getPotId } from '../selectors/Pot/';

class Pot extends Component {
  render() {
    return (
      <View style={{marginTop: 100, marginLeft: 20}}>
        <PotView {...this.props} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    potId: getPotId(state),
    data: {
      pot: getPot(state)
    }
  };
}

export default connect(mapStateToProps)(Pot);
