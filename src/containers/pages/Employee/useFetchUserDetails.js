// useFetchUserDetails.js
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {detailUserData} from '../../../redux/actions/userAction';

export const useFetchUserDetails = userId => {
  const dispatch = useDispatch();
  const userDetails = useSelector(state => state.userReducer.data.data);

  useEffect(() => {
    const payload = {
      link: `users/${userId}`,
    };
    console.log('useFetchUserDetails', payload);
    dispatch(detailUserData(payload));
  }, [dispatch, userId]);

  return userDetails;
};
