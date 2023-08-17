import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ButtonIcon from '../../components/atoms/ButtonIcon';
import Divider from '../../components/atoms/Divider';
import {color, styles as utilsStyles} from '../../utils/styles';

interface SettingItem {
  icon: string;
  label: string;
  subtitle?: string;
  onClick?: () => void;
}

interface SettingListProps {
  data: SettingItem[];
  title: string;
}

const SettingList: React.FC<SettingListProps> = ({data, title}) => {
  return (
    <View style={stylesCust.userActions}>
      <Text style={utilsStyles.textBase(17, color.grey2, 'textSemiBold')}>
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
              <Text style={utilsStyles.textBase(13, color.grey2)}>
                {l.label}
              </Text>
              <Text style={utilsStyles.textBase(13, color.grey)}>
                {l.subtitle}
              </Text>
            </View>
          )}
          {!l.onClick ? null : (
            <TouchableOpacity onPress={l.onClick} style={stylesCust.userButton}>
              <Text style={utilsStyles.textBase(13, color.grey2)}>
                {l.label}
              </Text>
              <Feather name="chevron-right" size={20} color={color.grey2} />
            </TouchableOpacity>
          )}
        </View>
      ))}
    </View>
  );
};

const stylesCust = StyleSheet.create({
  userActions: {marginBottom: 30, flex: 1},
  userAction: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 48,
    height: 48,
    borderRadius: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userButton: {
    marginLeft: 20,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default SettingList;
