import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color, styles} from '../../utils/styles';
import {ButtonIcon, Divider} from '../atoms';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface NavHomeProps {
  title: string;
  onSearch?: () => void;
  onCart: () => void;
  onFavorite?: () => void;
}

const NavHome: FC<NavHomeProps> = ({title, onSearch, onCart, onFavorite}) => {
  return (
    <View style={stylesCust.navHome}>
      <View style={stylesCust.header}>
        <View style={stylesCust.headerContent}>
          <View style={stylesCust.imageInit}>
            <Text
              style={[
                styles.textBase(20, color.white, 'textSemiBold', 'uppercase'),
                // eslint-disable-next-line react-native/no-inline-styles
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
              <>
                <ButtonIcon
                  type={stylesCust.buttonType}
                  onClick={onFavorite}
                  name="plus"
                  size={20}
                />
                <Divider width={10} height={0} />
              </>
            ) : null}
            <ButtonIcon
              type={stylesCust.buttonType}
              onClick={onCart}
              name="user"
              size={20}
            />
          </View>
        </View>
      </View>
      {onSearch ? (
        <View style={stylesCust.search}>
          <TouchableOpacity onPress={onSearch} style={stylesCust.searchInput}>
            <FontAwesome5 name="search" size={20} color={color.tgrey3} />
            <Divider width={10} height={0} />
            <Text style={styles.p4(color.tgrey3)}>Search in here ...</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

const stylesCust = StyleSheet.create({
  navHome: {height: 100, marginHorizontal: 30},
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
  headerLocation: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
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
    marginBottom: 30,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: color.white,
    backgroundColor: color.white,
    borderRadius: 10,
    flex: 1,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  buttonType: {
    backgroundColor: color.white,
    borderColor: color.white,
    color: color.tblack,
  },
});

export default NavHome;
