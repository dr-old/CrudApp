import {PixelRatio, Platform, StyleSheet} from 'react-native';
import {color, styles} from '../../../utils/styles';

const stylesCust = StyleSheet.create({
  banner: {
    height: 134,
    width: '100%',
    borderRadius: 15,
    resizeMode: 'cover',
    backgroundColor: color.tblack2,
  },
  cardTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  saldo: {flex: 1, justifyContent: 'center'},
  cardSaldo: {
    backgroundColor: color.green7,
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    flex: 1,
  },
  buttonType: (clr = color.white) => ({
    backgroundColor: color.green4,
    borderColor: color.green4,
    color: clr,
  }),
  buttonPay: {
    marginLeft: 10,
    width: 50,
    height: 50,
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.green4,
  },
  feature: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  featureBox: {alignItems: 'center', justifyContent: 'center'},
  featureIcon: {
    // borderWidth: 1,
    // borderColor: color.green4,
    backgroundColor: color.green4,
    width: 68,
    height: 68,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
  },
  featureText: styles.textBase(12, color.green4, 'textMedium', 'none'),
});

export default stylesCust;
