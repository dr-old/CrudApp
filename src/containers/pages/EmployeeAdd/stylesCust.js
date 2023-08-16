import {PixelRatio, Platform, StyleSheet} from 'react-native';
import {color, styles} from '../../../utils/styles';

const stylesCust = StyleSheet.create({
  card: {
    paddingHorizontal: 30,
    // marginTop: 20,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  groupInput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  groupItem: {width: '47%'},
});

export default stylesCust;
