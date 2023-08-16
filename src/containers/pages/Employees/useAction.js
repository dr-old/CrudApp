import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchEmployeeData} from '../../../redux/actions/employeeAction';

const useAction = () => {
  const dispatch = useDispatch();
  const employees = useSelector(state => state.employeeReducer);
  const user = useSelector(state => state.generalReducer.user);
  const navigation = useNavigation();
  const [isSearch, setSearch] = useState('');
  const [isData, setData] = useState([]);
  const [activeSearch, setActiveSearch] = useState('');
  const [isMounted, setMounted] = useState(true);

  const onChangeText = event => {
    let searchText = event.toString();
    setSearch(searchText);
    // searchText = searchText.trim().toUpperCase();
    // let data = employees.data;
    // if (data?.length > 0) {
    //   data = data.filter(l => l.title.toUpperCase().match(searchText));
    //   setData(data);
    // }
  };

  useEffect(() => {
    if (isMounted) {
      handleGetEmployee();
    }
    return () => {
      setMounted(false);
    };
  });

  const handleGetEmployee = () => {
    const payload = {
      link: `employee?search=${isSearch?.trim()}`,
      token: user.token,
    };
    dispatch(fetchEmployeeData(payload));
  };

  const handleClear = () => {
    setActiveSearch(!activeSearch);
    setSearch('');
    handleGetEmployee();
  };

  return {
    navigation,
    employees,
    isData,
    isSearch,
    activeSearch,
    setSearch,
    handleGetEmployee,
    handleClear,
    onChangeText,
  };
};

export default useAction;
