import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchEmployeeData} from '../../../redux/actions/employeeAction';

const useAction = () => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employeeReducer);
  const user = useSelector(state => state.generalReducer.user);
  const navigation = useNavigation();
  const [isMounted, setMounted] = useState(true);
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (isMounted) {
      handleGetEmployee();
    }
    return () => {
      setMounted(false);
    };
  });

  useEffect(() => {
    if (employees?.data?.length > 0) {
      setItems(prevItems => [...prevItems, ...employees.data]);
    }
  }, [employees?.data]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
    handleGetEmployee();
  };

  const handleGetEmployee = () => {
    const payload = {
      link: `employee?size=10&page=${page}&search=`,
      token: user.token,
    };
    dispatch(fetchEmployeeData(payload));
  };

  return {
    navigation,
    employees,
    user,
    items,
    handleLoadMore,
  };
};

export default useAction;
