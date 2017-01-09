import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import {heavyWeight, baseFontSize} from '../../../styles/text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 5,
    paddingBottom: 3,
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    borderColor: colors.borderGrey,
    borderBottomWidth: 1,
    borderRadius: 6
  },
  progressBar: {
    marginRight: 5
  },
  title: {

  },
  balance: {
    color: colors.blue,
    fontWeight: heavyWeight
  },
  arrow: {
    position: 'absolute',
    right: 10,
    top: 15,
    alignItems: 'flex-end',
  },

  image: {
    marginBottom: 8
  },

  percentage: {
    fontSize: baseFontSize,
    fontWeight: heavyWeight,
    color: colors.darkGrey
  }
});

export default styles;
