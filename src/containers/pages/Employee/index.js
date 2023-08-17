import React, {useEffect, useState} from 'react';
import {color, styles} from '../../../utils/styles';
import {Container, ModalAlert} from '../../organism';
import {useFetchUserDetails} from './useFetchUserDetails';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, View} from 'react-native';
import {ButtonLabel, Divider} from '../../../components/atoms';
import stylesCust from './stylesCust';
import {FormInput} from '../../../components/molecules';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteUserData,
  updateDetailUserData,
  updateUserData,
} from '../../../redux/actions/userAction';
import {showMessage} from 'react-native-flash-message';

function Employee({route}) {
  const {userId} = route.params;
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const user = useFetchUserDetails(userId);
  const form = useSelector(state => state.generalReducer.formEmployee);
  const userProcess = useSelector(state => state.userReducer);
  const userUpdate = useSelector(state => state.userReducer.user);
  const [edit, setEdit] = useState(false);
  const [modalAlert, setModalAlert] = useState({status: false, detail: {}});

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

  const handleDelete = () => {
    const payload = {
      link: `users/${user.id}`,
    };
    console.log('handleDelete', payload);
    dispatch(deleteUserData(payload));
  };

  const openModal = (message, submit) => {
    setModalAlert({
      status: true,
      message: message,
      onSubmit: submit,
      onCancel: () => closeModal(),
    });
  };

  const closeModal = () => {
    setModalAlert({status: false});
  };

  useEffect(() => {
    if (userUpdate?.name) {
      showMessage({
        message: 'Success',
        description: 'User updated successfull',
        type: 'success',
      });
    } else if (userUpdate?.delete) {
      showMessage({
        message: 'Success',
        description: 'User deleted successfull',
        type: 'success',
      });
      dispatch(updateDetailUserData({}));
      navigation.goBack();
    }
  }, [userUpdate, dispatch, navigation]);

  return (
    <>
      <Container
        loading={userProcess.loading}
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
            <View style={stylesCust.footer}>
              <ButtonLabel
                type="danger"
                solid={true}
                label="Delete!"
                size="large"
                disabled={edit}
                onClick={() =>
                  openModal('Are you sure to delete this data ?', () => {
                    handleDelete();
                    closeModal();
                  })
                }
              />
            </View>
          </>
        ) : null}
        {modalAlert?.status && (
          <View styles={{position: 'absolute'}}>
            <ModalAlert data={modalAlert} close={() => closeModal()} />
          </View>
        )}
      </Container>
    </>
  );
}

export default Employee;
