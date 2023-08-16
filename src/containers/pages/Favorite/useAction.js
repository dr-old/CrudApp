import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const useAction = () => {
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.generalReducer.favoriteList);
  const navigation = useNavigation();

  const handleSetFavorite = item => {
    let data =
      favorite?.length > 0 ? favorite.filter(i => i?.name !== item.name) : [];
    dispatch({type: 'SET_FAVORITE_LIST', favorite: data});
  };

  return {
    navigation,
    favorite,
    handleSetFavorite,
  };
};

export default useAction;
