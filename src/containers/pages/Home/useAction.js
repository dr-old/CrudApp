import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, Platform} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPaymentData} from '../../../redux/actions/paymentAction';
import {fetchProductData} from '../../../redux/actions/productAction';

const useAction = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer);
  const user = useSelector(state => state.generalReducer.user);
  const navigation = useNavigation();
  const [isMounted, setMounted] = useState(true);
  const [isSearch, setSearch] = useState('');
  const [isData, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const category = [
    {
      name: 'BOP',
      image: 'hard-drive',
      onClick: () => console.log(),
    },
    {
      name: 'BPP',
      image: 'trending-up',
      onClick: () => console.log(),
    },
    {
      name: 'SKS',
      image: 'book-open',
      onClick: () => console.log(),
    },
    {
      name: 'Uang Saku',
      image: 'briefcase',
      onClick: () => console.log(),
    },
  ];
  const banner = [
    {
      image: require('../../../../assets/illustration/Banner.png'),
    },
    {
      image: require('../../../../assets/illustration/Banner-1.png'),
    },
    {
      image: require('../../../../assets/illustration/Banner-2.png'),
    },
    {
      image: require('../../../../assets/illustration/Banner-3.png'),
    },
  ];

  useEffect(() => {
    if (isMounted) {
      handleGetProduct();
    }
    return () => {
      setMounted(false);
    };
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    handleGetProduct();
    setRefreshing(false);
  });

  const handleGetProduct = () => {
    const payload = {
      link: 'products',
    };
    dispatch(fetchProductData(payload));
  };

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

  return {
    navigation,
    products,
    banner,
    category,
    user,
    isData,
    isSearch,
    refreshing,
    handleRefresh,
  };
};

export default useAction;
