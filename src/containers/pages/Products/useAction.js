import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useAction = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer);
  const navigation = useNavigation();
  const [isSearch, setSearch] = useState('');
  const [isData, setData] = useState([]);
  const [activeSearch, setActiveSearch] = useState('');

  const handleSearch = event => {
    let searchText = event.toString();
    setSearch(searchText);
    searchText = searchText.trim().toUpperCase();
    let data = products.data;
    if (data?.length > 0) {
      data = data.filter(l => l.title.toUpperCase().match(searchText));
      setData(data);
    }
  };

  const handleClear = () => {
    setActiveSearch(!activeSearch);
    setSearch('');
    setData([]);
  };

  return {
    navigation,
    products,
    isData,
    isSearch,
    activeSearch,
    setSearch,
    handleSearch,
    handleClear,
  };
};

export default useAction;
