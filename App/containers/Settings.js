import React, {Component} from 'react';
import SettingsView from '../components/Settings/SettingsView';
import { connect } from 'react-redux';
//import { showIdentityVerificationBanner } from '../selectors/IdentityVerification';

class Settings extends Component {
  render() {
    return (
      <SettingsView {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  const user = state.application.user;
  return {
    user
    //showIdentityVerification: showIdentityVerificationBanner(state)
  };
}

export default connect(mapStateToProps)(Settings);
