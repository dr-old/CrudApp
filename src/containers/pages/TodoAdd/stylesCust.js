import {StyleSheet} from 'react-native';
import {color} from '../../../utils/styles';

const stylesCust = StyleSheet.create({
  card: {
    paddingHorizontal: 30,
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  groupInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  groupItem: {width: '47%'},
  buttonType: reminder => ({
    backgroundColor: reminder ? color.green4 : color.white,
    borderColor: reminder ? color.green4 : color.white,
    color: reminder ? color.white : color.tblack,
  }),
});

export default stylesCust;
