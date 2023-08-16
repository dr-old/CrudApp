import {PixelRatio, Platform, StyleSheet} from 'react-native';
import {color} from '../../../utils/styles';

const stylesCust = StyleSheet.create({
  cardTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  cardList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardNominal: (bgcolor = color.white3) => ({
    backgroundColor: bgcolor,
    padding: 10,
    borderRadius: 15,
    height: 70,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  footer: {
    backgroundColor: color.white9,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});

export default stylesCust;
