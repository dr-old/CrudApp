// useFetchUsers.js
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {listUserData} from '../../../redux/actions/userAction';

export const useFetchUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.userReducer);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const payload = {
      link: 'users',
      data: {
        page,
      },
    };
    console.log('payload', payload);
    dispatch(listUserData(payload));
  }, [dispatch, page]);

  const loadMore = () => {
    if (!users.loading) {
      setPage(page + 1);
    }
  };

  const reload = () => {
    setPage(1);
  };

  return {users, loadMore, reload};
};
