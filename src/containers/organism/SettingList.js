import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import {ButtonIcon, Divider} from '../../components/atoms';
import {color, styles} from '../../utils/styles';

function SettingList({data, title}) {
  return (
    <View style={stylesCust.userActions}>
      <Text style={styles.textBase(17, color.grey2, 'textSemiBold')}>
        {title}
      </Text>
      <Divider height={20} />
      {data.map(l => (
        <View key={l.icon} style={stylesCust.userAction}>
          <ButtonIcon
            type={{
              backgroundColor: color.white,
              borderColor: color.white,
              color: color.tblack,
            }}
            name={l.icon}
            size={20}
            onClick={() => console.log('primary')}
          />
          {!l.subtitle ? null : (
            <View style={stylesCust.userButton}>
              <Text style={styles.textBase(13, color.grey2)}>{l.label}</Text>
              <Text style={styles.textBase(13, color.grey)}>{l.subtitle}</Text>
            </View>
          )}
          {!l.onClick ? null : (
            <TouchableOpacity onPress={l.onClick} style={stylesCust.userButton}>
              <Text style={styles.textBase(13, color.grey2)}>{l.label}</Text>
              <Feather name="chevron-right" size={20} color={color.grey2} />
            </TouchableOpacity>
          )}
        </View>
      ))}
    </View>
  );
}

const stylesCust = StyleSheet.create({
  userActions: {marginBottom: 30, flex: 1},
  userAction: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: backgroundColor => ({
    width: 48,
    height: 48,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor,
  }),
  userButton: {
    marginLeft: 20,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default SettingList;
