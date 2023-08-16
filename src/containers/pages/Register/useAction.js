import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {insertUserData} from '../../../redux/actions/userAction';

const useAction = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer);
  const form = useSelector(state => state.generalReducer.formRegister);
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
      dispatch({type: 'USER_RESET'});
      dispatch({type: 'CLEAN_FORM_REGISTER'});
    }
  });

  const onChangeText = (type, value) => {
    dispatch({type: 'SET_FORM_REGISTER', inputType: type, inputValue: value});
  };

  const validateEmail = email => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const validatePassword = str => {
    var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return re.test(str);
  };

  const validate = () => {
    let res = {};
    if (!validateEmail(form.email)) {
      res = {
        message: 'Email is not valid',
        status: false,
      };
    } else if (!validatePassword(form.password)) {
      res = {
        message:
          'Password min 8 letter, with at least a symbol, upper and lower case letters and a number',
        status: false,
      };
    } else {
      res = {
        message: 'Signup is success',
        status: true,
      };
    }
    return res;
  };

  const signUp = () => {
    let isValid = validate();
    if (!isValid.status) {
      showMessage({
        message: 'Failed',
        description: isValid.message,
        type: 'danger',
      });
    } else {
      const payload = {
        link: 'users/create',
        data: {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email?.toLowerCase(),
          password: form.password,
          phoneId: '',
          phone: '',
        },
      };
      dispatch(insertUserData(payload));
    }
  };

  const signUpValidate = () => {
    if (form.firstName && form.lastName && form.email && form.password) {
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
    signUp,
    signUpValidate,
    setToogle,
    onChangeText,
  };
};

export default useAction;
