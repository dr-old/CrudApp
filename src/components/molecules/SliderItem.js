import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Platform,
  PixelRatio,
} from 'react-native';
import {color, styles} from '../../utils/styles';
import {ButtonLabel, Divider} from '../atoms';

function SliderItem({item, width, height}) {
  return (
    <View style={stylesCust.slider(width, height)}>
      <View style={stylesCust.contentImage}>
        <Image source={item.image} style={stylesCust.image} />
      </View>
      <View style={{flex: 1}} />
      <View style={stylesCust.constentCard}>
        <Text style={styles.h3(color.tblack, 'center')}>{item.title}</Text>
        <Divider height={20} />
        <Text style={stylesCust.description}>{item.text}</Text>
        {item?.onDone ? (
          <>
            <Divider height={Platform.OS === 'ios' ? 10 : 20} />
            <ButtonLabel
              type="primary"
              solid={true}
              label="Mulai!"
              size="large"
              onClick={item.onDone}
            />
          </>
        ) : null}
      </View>
    </View>
  );
}

const stylesCust = StyleSheet.create({
  constentCard: {
    backgroundColor: color.white,
    height: Platform.OS === 'ios' ? 326 : 266,
    paddingTop: 43,
    paddingHorizontal: 30,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  contentImage: {
    height: PixelRatio.getPixelSizeForLayoutSize(135),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {flex: 1, backgroundColor: color.white},
  slider: (width, height) => ({
    width,
    height,
    paddingTop: 100,
    backgroundColor: color.white7,
  }),
  description: [styles.p4(color.tgrey3, 'center'), {paddingHorizontal: 33}],
  image: {resizeMode: 'contain', height: 221, width: 221},
});

export default SliderItem;
