import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Divider} from '../../../components/atoms';
import {ErrorMessage, TileEmployee} from '../../../components/molecules';
import {color} from '../../../utils/styles';
import {Container} from '../../organism';
import stylesCust from './stylesCust';
import useAction from './useAction';

function Employees({route}) {
  const {itemCategory} = route.params;
  const {
    navigation,
    employees,
    isData,
    isSearch,
    activeSearch,
    handleGetEmployee,
    handleClear,
    onChangeText,
  } = useAction();

  return (
    <Container
      bgColor={color.white9}
      loading={employees.loading}
      navbar={{
        type: 'fixed',
        value: isSearch,
        title: itemCategory,
        onChangeText: value => onChangeText(value),
        onSearch: () => handleGetEmployee(),
        onClear: () => handleClear(),
        onClick: () => navigation.goBack(),
      }}>
      <View style={stylesCust.card}>
        <Divider height={10} />
        {employees?.data?.length > 0 ? (
          employees.data.map((item, index) => (
            <TileEmployee
              key={index}
              item={item}
              onClick={() =>
                navigation.push('Employee', {itemData: item, itemId: index + 1})
              }
            />
          ))
        ) : (
          <ErrorMessage marginVertical={50} message="Data is not found" />
        )}
      </View>
    </Container>
  );
}

export default Employees;
