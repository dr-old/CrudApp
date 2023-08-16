import {PixelRatio, Platform, StyleSheet} from 'react-native';
import {color, styles} from '../../../utils/styles';

const stylesCust = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    height: 250,
  },
  price: {
    height: 50,
    backgroundColor: color.oranget,
    paddingHorizontal: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    color: color.tgrey,
  },
  iconCategory: {
    backgroundColor: color.oranget4,
    borderColor: color.oranget4,
    color: color.bluep,
  },
  card: {
    // paddingHorizontal: 30,
    marginTop: -20,
    paddingVertical: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: color.white,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginHorizontal: 30,
  },
  cardPrice: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: color.white8,
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 30,
    marginBottom: 20,
  },
  cardDesc: {
    flex: 1,
    marginHorizontal: 30,
    marginBottom: 20,
  },
  cardTitle: {flex: 1},
  similarText: {marginHorizontal: 30, marginVertical: 20},
  goBack: {position: 'absolute', top: 20, left: 20, zIndex: 10},
  buttonType: (
    clr = color.tblack,
    backgroundColor = 'transparent',
    borderColor = 'transparent',
  ) => ({
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    color: clr,
  }),
  buttonFloat: {
    position: 'absolute',
    left: 0,
    top: 30.9,
    marginLeft: 30,
    zIndex: 2,
  },
  qty: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: 30,
    justifyContent: 'flex-end',
  },
  bottom: {marginHorizontal: 30, flex: 1},
  footer: {
    backgroundColor: color.white,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

export default stylesCust;
