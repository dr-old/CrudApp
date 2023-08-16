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
  cardNominal: (brcolor = color.green7) => ({
    backgroundColor: color.green7,
    borderColor: brcolor,
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
    width: 100,
    height: 100,
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
