import React from 'react';
import {Text, View} from 'react-native';
import PotItem from '../PotItem';
import styles from './styles.js';


const PotsSection = ({pots, title}) => {
  const renderPotItems = (potData) => {
    return potData.map(item => (
      <PotItem key={item.id} pot={item} />
    ));
  };

  return (
      <View style={styles.container}>
        <Text style={styles.title}>{pots.length} {title} Pots</Text>
        <View style={styles.listContainer}>{renderPotItems(pots)}</View>
      </View>
  );
};

PotsSection.propTypes ={
  pots: React.PropTypes.array.isRequired,
  title: React.PropTypes.string.isRequired
};

export default PotsSection;
