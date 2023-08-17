import React from 'react';
import {Platform, Text, View} from 'react-native';
import {styles} from '../../utils';
import {color} from '../../utils/styles';

interface OptionLabelProps {
  title: string;
  subtitle: string;
  onClick: () => void;
}

const OptionLabel: React.FC<OptionLabelProps> = ({
  title,
  subtitle,
  onClick,
}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{marginTop: Platform.OS === 'ios' ? 10 : 20}}>
      <Text style={[styles.p4(color.tblack, 'center')]}>
        {title}
        <Text onPress={onClick} style={[styles.h7(color.green4)]}>
          {subtitle}
        </Text>
      </Text>
    </View>
  );
};

export default OptionLabel;
