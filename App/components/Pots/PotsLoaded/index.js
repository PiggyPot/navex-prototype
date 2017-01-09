import React from 'react';
import {View, ScrollView} from 'react-native';
import PotsSection from '../PotsSection/';
import PotStats from '../PotsStats/';
import styles from './styles';


const PotsLoaded = (props) => {

  return (
    <View style={{flex: 1}}>
      <PotStats
        savedToDate = {props.savedToDate}
        savedInOpenPots = {props.savedInOpenPots}
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
          {props.activePots.length > 0 ? <PotsSection pots={props.activePots} title="Active" /> : null}
          {props.completedPots.length > 0 ? <PotsSection pots={props.completedPots} title="Completed" /> : null}
          {props.archivedPots.length > 0 ? <PotsSection pots={props.archivedPots} title="Archived" /> : null}
      </ScrollView>
    </View>
  );
};

export default PotsLoaded;
