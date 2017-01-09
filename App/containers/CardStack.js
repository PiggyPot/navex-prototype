import React, {Component} from 'react';
import {NavigationExperimental} from 'react-native';
import { pop } from '../actions/navActions';
import BackButton from '../components/Common/BackButton';
import { connect } from 'react-redux';
import Home from '../containers/Home';
import Pot from '../containers/Pot';
import Pots from '../containers/Pots';
import colors from '../styles/colors';

const {
	CardStack: NavigationCardStack,
	Header: NavigationHeader
} = NavigationExperimental;

class Header extends Component {
  _renderTitleComponent = (props) => {
    return (
      <NavigationHeader.Title
        textStyle={{color: colors.white}}
      >
        {props.scene.route.key}
      </NavigationHeader.Title>
    );
  }
  _back = () => {
		console.log(props)
		return (
			<BackButton
				onPress={() => {}}
			/>
		)
	}

  render() {
    return (
      <NavigationHeader
        {...this.props}
        renderTitleComponent={this._renderTitleComponent}
				renderLeftComponent={this._back}
        style={{backgroundColor: colors.blue, height: 64, borderBottomWidth: 0}}
      />
    );
  }
}

class CardStack extends React.Component {
  _renderScene = (props) => {
    switch(props.scene.route.key) {
      case 'Home':
        return <Home />;
      case 'Pots':
        return <Pots />;
      case 'Pot':
        return <Pot />
    }
  }

  _renderHeader = (sceneProps) => {
    return (
      <Header
        {...sceneProps}
      />
    );
  }

  render() {
    let { navState } = this.props;
		console.log('Yep');
    return (
			<NavigationCardStack
				navigationState={navState}
				renderScene={this._renderScene}
        renderHeader={this._renderHeader}
			/>
		);
  }
}

// NavigationRootContainer

export default connect(
  state => ({
    navState: state.navState
  })
)(CardStack);
