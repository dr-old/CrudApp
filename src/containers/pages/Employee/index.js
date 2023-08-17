import React, {useEffect, useState} from 'react';
import {color, styles} from '../../../utils/styles';
import {Container} from '../../organism';
import {useFetchUserDetails} from './useFetchUserDetails';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, View} from 'react-native';
import {Divider} from '../../../components/atoms';
import stylesCust from './stylesCust';
import {FormInput} from '../../../components/molecules';
import {useDispatch, useSelector} from 'react-redux';
import {updateUserData} from '../../../redux/actions/userAction';
import {showMessage} from 'react-native-flash-message';

function Employee({route}) {
  const {userId} = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useFetchUserDetails(userId);
  const form = useSelector(state => state.generalReducer.formEmployee);
  const userUpdate = useSelector(state => state.userReducer.user);
  const [edit, setEdit] = useState(false);

  const onChangeText = (type, value) => {
    dispatch({type: 'SET_FORM_EMPLOYEE', inputType: type, inputValue: value});
  };

  const handleEdit = () => {
    if (edit) {
      const payload = {
        link: `users/${user.id}`,
        data: {
          name: form.first_name + ' ' + form.last_name,
          job: form.job,
        },
      };
      console.log('handleEdit', payload);
      dispatch(updateUserData(payload));
    }
    setEdit(!edit);
  };

  useEffect(() => {
    if (userUpdate?.name) {
      showMessage({
        message: 'Success',
        description: 'User is updated',
        type: 'success',
      });
    }
  }, [userUpdate, dispatch]);

  return (
    <>
      <Container
        bgColor={color.white9}
        navbar={{
          type: 'fixed',
          title: 'Detail',
          onClick: () => navigation.goBack(),
          onEdit: {
            onClick: () => handleEdit(),
            icon: edit ? 'check-square' : 'edit',
          },
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
                    {userUpdate.name
                      ? userUpdate.name
                      : user.first_name + ' ' + user.last_name}
                  </Text>
                  <Text style={styles.p4(color.tgrey, 'center')}>
                    {user.email}
                  </Text>
                </View>
              </View>
              <View style={stylesCust.cardDesc}>
                <View style={stylesCust.groupInput}>
                  <View style={stylesCust.groupItem}>
                    <FormInput
                      label="Name"
                      placeholder={'Your first name'}
                      type="solid"
                      value={form.first_name}
                      disabled={!edit}
                      onChangeText={value => onChangeText('first_name', value)}
                    />
                  </View>
                  <View style={stylesCust.groupItem}>
                    <FormInput
                      label={' '}
                      placeholder="Your last name"
                      type="solid"
                      value={form.last_name}
                      disabled={!edit}
                      onChangeText={value => onChangeText('last_name', value)}
                    />
                  </View>
                </View>
                <FormInput
                  label="Jobs"
                  placeholder="Your jobs"
                  type="solid"
                  value={form.job}
                  disabled={!edit}
                  onChangeText={value => onChangeText('job', value)}
                />
              </View>
            </View>
          </>
        ) : null}
      </Container>
    </>
  );
}

export default Employee;
