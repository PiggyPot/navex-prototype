import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import {baseFontFamily, mediumWeight, mediumText, baseLineHeight} from '../../../styles/text';

const styles = StyleSheet.create({
  text: {
    color: colors.darkGrey,
    fontFamily: baseFontFamily,
    fontSize: mediumText,
    fontWeight: mediumWeight,
    lineHeight: baseLineHeight
  }
});

export default styles;
