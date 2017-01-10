import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import { connect } from 'react-redux';
import { pop } from '../../../actions/navActions';
import styles from './styles';

const BackButton = ({ pop }) => {
  return (
    <TouchableOpacity
    style={[styles.backButton]}
    onPress={() => pop()}
    accessibilityLabel="Go back"
    >
    <Image source={require('./img/back-arrow.png')} style={[styles.settingsButtonImage]}/>
    </TouchableOpacity>
  );
};

BackButton.propTypes = {
  callback: React.PropTypes.func
};

function mapStateToProps () { return {} }

function mapDispatchToProps (dispatch) {
  return {
    pop: () => dispatch(pop())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackButton);
