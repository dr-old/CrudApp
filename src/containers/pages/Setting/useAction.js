import {GoogleSignin} from '@react-native-community/google-signin';
import {useNavigation} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';

const useAction = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.generalReducer.user);
  const navigation = useNavigation();

  const signOut = async () => {
    showMessage({
      message: 'Success',
      description: 'Logout is success',
      type: 'success',
    });
    dispatch({type: 'SET_USER_CLEAN'});
    GoogleSignin.signOut();
    // dispatch({type: 'SET_TRANSACTION_LIST', data: []});
  };
  return {user, signOut};
};

export default useAction;
