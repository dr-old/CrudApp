import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {showMessage} from 'react-native-flash-message';
import {insertUserData} from '../../../redux/actions/userAction';

const useAction = () => {
  const dispatch = useDispatch();
  const form = useSelector(state => state.generalReducer.formTodo);
  const user = useSelector(state => state.generalReducer.user);
  const userCreate = useSelector(state => state.userReducer);
  const navigation = useNavigation();

  useEffect(() => {
    if (userCreate?.error?.message) {
      showMessage({
        message: 'Failed',
        description: userCreate.error.message,
        type: 'danger',
      });
      dispatch({type: 'USER_RESET'});
    } else if (userCreate?.data?.message) {
      showMessage({
        message: 'Success',
        description: userCreate.data.message,
        type: 'success',
      });
      console.log('userCreate', userCreate.data);
      dispatch({type: 'USER_RESET'});
      dispatch({type: 'CLEAN_FORM_EMPLOYEE'});
    }
  }, [dispatch, userCreate]);

  const onChangeText = (type, value) => {
    dispatch({type: 'SET_FORM_TODO', inputType: type, inputValue: value});
  };

  const handleValidate = () => {
    if (form?.title && form?.description) {
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
      link: 'users',
      data: form,
    };
    console.log('handleSubmit', payload);
    dispatch(insertUserData(payload));
  };

  return {
    navigation,
    userCreate,
    form,
    handleValidate,
    handleCancel,
    handleSubmit,
    onChangeText,
  };
};

export default useAction;
