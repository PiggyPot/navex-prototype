import React from 'react';
import { View } from 'react-native';
import PotsLoaded from '../PotsLoaded';
import Loader from '../../Common/Loader/';
import styles from './styles';


const PotsView = (props) => {
  let view;
  if (props.isLoading) {
    view = <Loader />;
  } else {
    view = <PotsLoaded {...props} />;
  }

  return (
    <View style={styles.container}>
      {view}
    </View>
  );
};

PotsView.propTypes = {
  activePots: React.PropTypes.array.isRequired,
  completedPots: React.PropTypes.array.isRequired,
  archivedPots: React.PropTypes.array.isRequired
};

export default PotsView;
