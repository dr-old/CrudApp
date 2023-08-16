import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {insertEmployeeData} from '../../../redux/actions/employeeAction';

const useAction = () => {
  const dispatch = useDispatch();
  const form = useSelector(state => state.generalReducer.formEmployee);
  const user = useSelector(state => state.generalReducer.user);
  const employee = useSelector(state => state.employeeReducer);
  const navigation = useNavigation();

  useEffect(() => {
    if (employee?.errorDetail?.message) {
      showMessage({
        message: 'Failed',
        description: employee.errorDetail.message,
        type: 'danger',
      });
      dispatch({type: 'GET_EMPLOYEE_DETAIL_RESET'});
    } else if (employee?.dataDetail?.message) {
      showMessage({
        message: 'Success',
        description: employee.dataDetail.message,
        type: 'success',
      });
      dispatch({type: 'GET_EMPLOYEE_DETAIL_RESET'});
      dispatch({type: 'CLEAN_FORM_EMPLOYEE'});
    }
  }, [dispatch, employee]);

  const onChangeText = (type, value) => {
    dispatch({type: 'SET_FORM_EMPLOYEE', inputType: type, inputValue: value});
  };

  const handleValidate = () => {
    if (
      form?.first_name &&
      form?.last_name &&
      form?.company_name &&
      form?.address &&
      form?.city &&
      form?.county &&
      form?.state &&
      form?.zip &&
      form?.phone1 &&
      form?.phone2 &&
      form?.email &&
      form?.web
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleCancel = () => {
    dispatch({type: 'CLEAN_FORM_EMPLOYEE'});
  };

  const handleSubmit = () => {
    const payload = {
      link: 'employee/create',
      token: user.token,
      data: form,
    };
    dispatch(insertEmployeeData(payload));
  };

  return {
    navigation,
    employee,
    form,
    handleValidate,
    handleCancel,
    handleSubmit,
    onChangeText,
  };
};

export default useAction;
