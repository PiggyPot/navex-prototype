import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import {largeText, baseFontFamily, heavyWeight} from '../../../styles/text';


const styles = StyleSheet.create({
  text: {
    color: colors.navy,
    fontWeight: heavyWeight,
    fontFamily: baseFontFamily,
    fontSize: largeText,
    lineHeight: 35
  }
})

export default styles;
