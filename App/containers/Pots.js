import React, {Component} from 'react';
import { connect } from 'react-redux';
import { View, Text, ListView } from 'react-native';
import PotsView from '../components/Pots/PotsView';
import get from '../actions/pots/get';
import { getActivePots, getCompletedPots, getArchivedPots, getTotalSavedToDate, getTotalOpenPots } from '../selectors/Pots';


class Pots extends Component {

  componentWillMount() {
    fetch('http://localhost:3000/', {
      method: 'get'
    }).then(res => {
      res.json().then(data => this.props.dispatch(get(data)));
    });
  }

  render() {
    return (
      <View>
      <PotsView
        {...this.props}
      />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoading: state.pots.isLoading,
    activePots: getActivePots(state),
    completedPots: getCompletedPots(state),
    archivedPots: getArchivedPots(state),
    savedToDate: getTotalSavedToDate(state),
    savedInOpenPots: getTotalOpenPots(state),
  };
}

export default connect(mapStateToProps)(Pots);
