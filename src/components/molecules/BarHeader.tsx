import React from 'react';
import {Platform, SafeAreaView, StatusBar, View} from 'react-native';
import {color} from '../../utils/styles';

interface StatusBarIosProps {
  backgroundColor: string;
}

const StatusBarIos: React.FC<StatusBarIosProps> = ({backgroundColor}) => (
  <View style={{backgroundColor, height: StatusBar.currentHeight}}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} />
    </SafeAreaView>
  </View>
);

interface BarHeaderProps {
  bgcolor?: string;
  barStyle?: 'default' | 'light-content' | 'dark-content';
}

const BarHeader: React.FC<BarHeaderProps> = ({
  bgcolor = color.white9,
  barStyle = 'dark-content',
}) => {
  if (Platform.OS === 'ios') {
    return <StatusBarIos backgroundColor={bgcolor} />;
  } else {
    return <StatusBar backgroundColor={bgcolor} barStyle={barStyle} />;
  }
};

export default BarHeader;
