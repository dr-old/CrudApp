import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {color, styles} from '../../../utils/styles';
import {Container, SettingList} from '../../organism';
import packageJson from '../../../../package.json';
import stylesCust from './stylesCust';
import useAction from './useAction';

function Setting() {
  const {user, signOut} = useAction();

  return (
    <Container bgColor={color.white9}>
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
