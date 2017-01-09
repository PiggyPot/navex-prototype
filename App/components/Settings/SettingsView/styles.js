import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';
import {textBodyLarge, bold} from '../../../styles/text';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  scrollContainer: {
    backgroundColor: colors.background,
    paddingVertical: 68
  },
  title: {
    paddingHorizontal: 20,
    marginBottom: 10,
    marginTop: 20
  },
  loggedInUser: {
    ...textBodyLarge
  },
  logoutContainer: {
    alignItems: 'center',
    marginTop: 30
  },
  verifyIdentity: {
    color: colors.red,
    fontFamily: bold,
    paddingLeft: 45
  }
});

export default styles;
