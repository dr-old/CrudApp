import {StyleSheet} from 'react-native';
import {color} from '../../../utils/styles';

const stylesCust = StyleSheet.create({
  card: {
    paddingHorizontal: 30,
  },
  groupInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  groupItem: {width: '47%'},
  buttonType: reminder => ({
    backgroundColor: reminder ? color.bluep8 : color.white,
    borderColor: reminder ? color.bluep8 : color.white,
    color: reminder ? color.white : color.tblack,
  }),
  detail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingTop: 150,
  },
  calendar: backgroundColor => ({
    backgroundColor,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  }),
  footer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

export default stylesCust;
