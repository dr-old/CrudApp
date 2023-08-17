import {StyleSheet} from 'react-native';
import {color} from '../../../utils/styles';

const stylesCust = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    height: 250,
  },
  cardImage: {
    height: 150,
    width: 150,
    borderRadius: 15,
    marginBottom: 10,
    resizeMode: 'cover',
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
    // marginTop: -20,
    marginHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 15,
    backgroundColor: color.white,
  },
  cardHeader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  cardPrice: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: color.white8,
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  cardDesc: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  cardTitle: {flex: 1, textAlign: 'center'},
  similarText: {marginHorizontal: 20, marginVertical: 20},
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
  groupInput: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  groupItem: {width: '47%'},
});

export default stylesCust;
