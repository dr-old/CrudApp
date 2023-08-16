import React from 'react';
import {View, Text} from 'react-native';
import {color, styles} from '../../../utils/styles';
import {Container} from '../../organism';
import {ButtonLabel, Divider} from '../../../components/atoms';
import stylesCust from './stylesCust';
import helpers from '../../../utils/helpers';
import useAction from './useAction';
import {TileProduct} from '../../../components/molecules';

function Cart() {
  const {navigation, cart, handleUpdateCart, handleCheckout} = useAction();

  return (
    <>
      <Container
        bgColor={color.white7}
        navbar={{
          type: 'fixed',
          title: 'Your Cart',
          onClick: () => navigation.goBack(),
        }}>
        <View style={stylesCust.card}>
          <Divider height={10} />
          {cart?.length > 0 ? (
            <View>
              {cart
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((item, index) => (
                  <TileProduct
                    key={index}
                    item={item}
                    onAddCart={() => handleUpdateCart(item, 'plus')}
                    onMinCart={() => handleUpdateCart(item, 'minus')}
                  />
                ))}
            </View>
          ) : null}
        </View>
      </Container>
      <View style={stylesCust.footer}>
        <ButtonLabel
          type="primary"
          solid={true}
          disabled={cart?.length > 0 ? false : true}
          label="Continue to Checkout!"
          size="large"
          onClick={() => handleCheckout()}
        />
      </View>
    </>
  );
}

export default Cart;
