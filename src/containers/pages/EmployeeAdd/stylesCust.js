import {StyleSheet} from 'react-native';

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
});

export default stylesCust;
