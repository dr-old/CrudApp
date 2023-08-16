import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {loginUserData} from '../../../redux/actions/userAction';
import {helpers} from '../../../utils';

const useAction = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer);
  const form = useSelector(state => state.generalReducer.formLogin);
  const navigation = useNavigation();
  const [isToogle, setToogle] = useState(true);

  useEffect(() => {
    if (user?.error?.message) {
      showMessage({
        message: 'Failed',
        description: user.error.message,
        type: 'danger',
      });
      dispatch({type: 'USER_RESET'});
    } else if (user?.data?.message) {
      showMessage({
        message: 'Success',
        description: user.data.message,
        type: 'success',
      });
      dispatch({
        type: 'SET_USER',
        token: helpers.getUid(),
        user: user.data.data,
        // user: {
        //   id: 1,
        //   firstName: 'Danni',
        //   lastName: 'Ramdan',
        //   email: 'danniramdan98@gmail.com',
        //   password: '123',
        //   phoneId: '62',
        //   phone: '85798261849',
        //   image:
        //     'http://127.0.0.1:3000/assets/images/90723d2e-9710-485e-b0ef-083549199254.jpeg',
        //   createdAt: '2023-02-17T04:20:33.000Z',
        //   updatedAt: '2023-02-18T17:57:18.000Z',
        //   userId: null,
        // },
      });
      dispatch({type: 'USER_RESET'});
      dispatch({type: 'CLEAN_FORM_LOGIN'});
    }
  });

  const onChangeText = (type, value) => {
    dispatch({type: 'SET_FORM_LOGIN', inputType: type, inputValue: value});
  };

  const signIn = () => {
    const payload = {
      link: 'users/login',
      data: {email: form.email?.toLowerCase(), password: form.password},
    };
    dispatch(loginUserData(payload));
  };

  const signInValidate = () => {
    if (form.email && form.password) {
      return true;
    } else {
      return false;
    }
  };

  return {
    navigation,
    isToogle,
    form,
    user,
    setToogle,
    onChangeText,
    signIn,
    signInValidate,
  };
};

export default useAction;
