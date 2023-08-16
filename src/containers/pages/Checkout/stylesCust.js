import {PixelRatio, Platform, StyleSheet} from 'react-native';
import {color, styles} from '../../../utils/styles';

const stylesCust = StyleSheet.create({
  card: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  footer: {
    backgroundColor: color.white7,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  payment: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  newCard: {
    borderRadius: 15,
    backgroundColor: color.white,
    padding: 20,
  },
  input: {
    backgroundColor: color.white8,
    borderRadius: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default stylesCust;
