import React from 'react';
import {color, styles} from '../../../utils/styles';
import {Container} from '../../organism';
import {useFetchUserDetails} from './useFetchUserDetails';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, View} from 'react-native';
import {Divider} from '../../../components/atoms';
import stylesCust from './stylesCust';

function Employee({route}) {
  const {userId} = route.params;
  const navigation = useNavigation();
  const user = useFetchUserDetails(userId);

  return (
    <>
      <Container
        bgColor={color.white9}
        navbar={{
          type: 'fixed',
          title: 'Detail',
          onClick: () => navigation.goBack(),
        }}>
        {user?.first_name ? (
          <>
            <View style={stylesCust.card}>
              <View style={stylesCust.cardHeader}>
                <Image
                  source={{uri: user.avatar}}
                  style={stylesCust.cardImage}
                />
                <Divider width={20} />
                <View style={stylesCust.cardTitle}>
                  <Text style={styles.h4(color.tblack, 'center')}>
                    {user.first_name + ' ' + user.last_name}
                  </Text>
                  <Text style={styles.p4(color.tgrey, 'center')}>
                    {user.email}
                  </Text>
                </View>
              </View>
              <View style={stylesCust.cardDesc}>
                <Text style={styles.h5()}>Name</Text>
                <Text style={styles.p1(color.tgrey)}>
                  {user.first_name + ' ' + user.last_name}
                </Text>
              </View>
              <View style={stylesCust.cardDesc}>
                <Text style={styles.h5()}>Jobs</Text>
                <Text style={styles.p1(color.tgrey)}>{user?.job}</Text>
              </View>
            </View>
          </>
        ) : null}
      </Container>
    </>
  );
}

export default Employee;
