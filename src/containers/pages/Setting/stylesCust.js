import {StyleSheet} from 'react-native';
import {color, styles} from '../../../utils/styles';

const stylesCust = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 20,
    marginTop: 20,
  },
  user: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  initPhoto: [
    styles.textBase(45, color.white, 'textSemiBold', 'uppercase'),
    {textAlign: 'center', paddingTop: 10},
  ],
  userEmail: [styles.p5(color.tgrey), {textTransform: 'lowercase'}],
  userPhoto: {
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 70,
    marginBottom: 20,
    backgroundColor: color.green4,
  },
  userImage: {
    resizeMode: 'cover',
    width: 100,
    height: 100,
    borderRadius: 70,
    marginBottom: 20,
  },
});

export default stylesCust;
