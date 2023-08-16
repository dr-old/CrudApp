import React from 'react';
import {View, Text} from 'react-native';
import {color, styles} from '../../../utils/styles';
import {Container} from '../../organism';
import {Divider} from '../../../components/atoms';
import stylesCust from './stylesCust';
import useAction from './useAction';
import {TileOrder} from '../../../components/molecules';

function Checkouts() {
  const {navigation, orders} = useAction();

  return (
    <Container
      bgColor={color.white7}
      navbar={{
        type: 'fixed',
        title: 'Your Orders',
      }}>
      <View style={stylesCust.card}>
        {orders?.length > 0 ? (
          <View>
            {orders
              .sort((a, b) => a.trxDate.localeCompare(b.trxDate))
              .map((item, index) => (
                <TileOrder
                  key={index}
                  item={item}
                  checkout={true}
                  onClick={() => navigation.push('Checkout', {itemData: item})}
                />
              ))}
          </View>
        ) : null}
      </View>
    </Container>
  );
}

export default Checkouts;
