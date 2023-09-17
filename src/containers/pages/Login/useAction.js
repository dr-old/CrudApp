import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {GoogleSignin} from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';

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
        token: user.data.token,
        // user: user.data.data,
        user: {
          id: 1,
          firstName: 'Danni',
          lastName: 'Ramdan',
          email: 'danniramdan98@gmail.com',
          phoneId: '62',
          phone: '85798261849',
          image: 'https://i.pravatar.cc/150?img=3',
          createdAt: '2023-02-17T04:20:33.000Z',
          updatedAt: '2023-02-18T17:57:18.000Z',
          userId: null,
        },
      });
      dispatch({type: 'USER_RESET'});
      dispatch({type: 'CLEAN_FORM_LOGIN'});
    }
  });

  const onChangeText = (type, value) => {
    dispatch({type: 'SET_FORM_LOGIN', inputType: type, inputValue: value});
  };

  // Function to handle Google Sign-In
  async function handleGoogleSignIn() {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo', userInfo);
      const {idToken} = userInfo;
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      const token = await GoogleSignin.getTokens();
      showMessage({
        message: 'Success',
        description: 'Login successfull',
        type: 'success',
      });
      dispatch({
        type: 'SET_USER',
        token: token.accessToken,
        user: userInfo.user,
      });
    } catch (error) {
      console.error('Google Sign-In error:', error);
    }
  }

  const signIn = () => {
    const payload = {
      link: 'login',
      data: {email: form.email?.toLowerCase(), password: form.password},
    };
    GoogleSignin.signOut();
    showMessage({
      message: 'Failed',
      description: 'Sign in with email or password is inactive',
      type: 'danger',
    });
    // dispatch(loginUserData(payload));
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
    handleGoogleSignIn,
  };
};

export default useAction;
