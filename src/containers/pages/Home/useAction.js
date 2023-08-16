import {useNavigation} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getListUserData} from '../../../redux/actions/userAction';

const useAction = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer);
  const user = useSelector(state => state.generalReducer.user);
  const users = useSelector(state => state.userReducer.dataList);
  const navigation = useNavigation();
  const [isMounted, setMounted] = useState(true);
  const [isSearch, setSearch] = useState('');
  const [isData, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [page, setPage] = useState(1);
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
      handleGetListUser(page);
    }
    return () => {
      setMounted(false);
    };
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    handleGetListUser(1);
    setPage(1); // Reset the page number
    setRefreshing(false);
  });

  const handleLoadMore = () => {
    if (!refreshing && !isLoadingMore) {
      setIsLoadingMore(true);
      const nextPage = page + 1;
      handleGetListUser(nextPage);
      setPage(nextPage);
      setIsLoadingMore(false);
    }
  };

  const handleGetListUser = page => {
    const payload = {
      link: `users?page=${page}`,
    };
    dispatch(getListUserData(payload));
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
    users,
    banner,
    category,
    user,
    page,
    setPage,
    setData,
    isData,
    isSearch,
    refreshing,
    handleRefresh,
    handleLoadMore,
  };
};

export default useAction;
