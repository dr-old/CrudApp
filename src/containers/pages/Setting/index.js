import * as React from 'react';
import {View, Text} from 'react-native';
import {color, styles} from '../../../utils/styles';
import {Container, SettingList} from '../../organism';
import packageJson from '../../../../package.json';
import stylesCust from './stylesCust';
import useAction from './useAction';
import {useNavigation} from '@react-navigation/native';

function Setting() {
  const {user, signOut} = useAction();
  const navigation = useNavigation();

  return (
    <Container
      bgColor={color.white9}
      navbar={{
        type: 'nofixed',
        title: '',
        onClick: () => navigation.goBack(),
      }}>
      {user?.data ? (
        <View style={stylesCust.user}>
          {/* <Image
            source={{uri: login.user.photo}}
            style={stylesCust.userImage}
          /> */}
          <View style={stylesCust.userPhoto}>
            <Text
              style={stylesCust.initPhoto}>{`${user?.data?.firstName?.charAt(
              0,
            )}${user?.data?.lastName?.charAt(0)}`}</Text>
          </View>
          <Text
            style={styles.h3()}>{`${user?.data?.firstName} ${user?.data?.lastName}`}</Text>
          <Text style={stylesCust.userEmail}>{user?.data?.email}</Text>
          {/* <Text style={stylesCust.userEmail}>{user?.token}</Text> */}
        </View>
      ) : null}
      <View style={stylesCust.container}>
        <SettingList
          title="General"
          data={[
            {
              icon: 'share-2',
              label: 'Version',
              subtitle: packageJson.version,
            },
            {
              icon: 'power',
              label: 'Logout',
              onClick: () => signOut(),
            },
          ]}
        />
      </View>
    </Container>
  );
}

export default Setting;
