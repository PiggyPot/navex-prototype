import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import {baseFontSize} from '../../../styles/text';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    paddingBottom: 12,
    paddingTop: 10
  },
  statsContainer: {
    flexDirection: 'row',
    flex: 1
  },
  stat: {
    alignItems: 'center',
    flex: 1
  },
  border: {
    width: 1,
    height: 38,
    marginTop: 4,
    backgroundColor: '#66C1F6'
  },
  label: {
    color: colors.white,
    fontSize: baseFontSize,
    marginBottom: 4
  },
  value: {
    color: colors.white,
    fontSize: baseFontSize + 8,
    lineHeight: baseFontSize + 12,
    letterSpacing: 1
  }
});

export default styles;
