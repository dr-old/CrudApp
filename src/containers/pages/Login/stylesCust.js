import {PixelRatio, StyleSheet} from 'react-native';

const stylesCust = StyleSheet.create({
  groupInput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  groupItem: {width: '47%'},
  contentBody: {marginHorizontal: 30},
  contentImage: {
    height: PixelRatio.getPixelSizeForLayoutSize(135),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {flex: 1, marginHorizontal: 30, marginTop: 30},
  buttonGoogle: {
    backgroundColor: '#4285F4',
    borderRadius: 8,
    height: 48,
    alignItems: 'center',
    marginTop: 35,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
});

export default stylesCust;
