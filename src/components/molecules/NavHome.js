import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color, styles} from '../../utils/styles';
import {ButtonIcon, Divider} from '../atoms';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function NavHome({
  title,
  subtitle,
  value,
  onChangeText,
  onClick,
  onSearch,
  onCart,
  onFavorite,
}) {
  const [isFocus, setFocus] = useState(null);

  return (
    <View style={{height: 150}}>
      <View style={stylesCust.header}>
        <View style={stylesCust.headerContent}>
          <View style={stylesCust.imageInit}>
            <Text
              style={[
                styles.textBase(20, color.white, 'textSemiBold', 'uppercase'),
                {paddingTop: 5},
              ]}>
              DR
            </Text>
          </View>
          <View style={stylesCust.headerLocation}>
            <Text style={styles.p4()}>Welcome</Text>
            <Text style={styles.h5()} numberOfLines={1}>
              {title}
            </Text>
          </View>
          <View style={stylesCust.headerButton}>
            {onFavorite ? (
              <ButtonIcon
                type={stylesCust.buttonType()}
                onClick={onFavorite}
                name="heart"
                size={20}
              />
            ) : null}
            <ButtonIcon
              type={stylesCust.buttonType()}
              onClick={onCart}
              name="plus"
              size={20}
            />
          </View>
        </View>
      </View>
      {onSearch ? (
        <View style={stylesCust.search}>
          <TouchableOpacity
            onPress={onSearch}
            style={stylesCust.searchInput(color.white)}>
            <FontAwesome5 name="search" size={20} color={color.tgrey3} />
            <Divider width={10} />
            <Text style={styles.p4(color.tgrey3)}>Search in here ...</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

const stylesCust = StyleSheet.create({
  imageInit: {
    backgroundColor: color.green4,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginRight: 10,
  },
  point: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -7,
  },
  headerPoint: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 30,
  },
  headerButton: {flexDirection: 'row'},
  headerLocation: {flex: 1, justifyContent: 'center'},
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    // marginHorizontal: 30,
    marginBottom: 5,
  },
  profile: {
    backgroundColor: color.bluep5,
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    height: 40,
    flexDirection: 'row',
    // marginHorizontal: 30,
    marginBottom: 30,
  },
  searchInput: borderColor => ({
    borderWidth: 1,
    borderColor: borderColor,
    backgroundColor: borderColor,
    borderRadius: 10,
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  }),
  header: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  buttonType: (clr = color.tblack) => ({
    backgroundColor: color.white,
    borderColor: color.white,
    color: clr,
  }),
  buttonFloat: {position: 'absolute', left: 0, marginLeft: 30},
  title: [
    styles.h3(color.white),
    {textTransform: 'none', marginHorizontal: 30, marginBottom: 10},
  ],
  subtitle: [styles.p4(color.tgrey3, 'center'), {textTransform: 'none'}],
});

export default NavHome;
