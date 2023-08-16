import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {color, styles} from '../../../utils/styles';
import {Container} from '../../organism';
import {ButtonLabel, Divider, InputText} from '../../../components/atoms';
import stylesCust from './stylesCust';
import helpers from '../../../utils/helpers';
import useAction from './useAction';
import {
  DetailPayment,
  FormInput,
  TileProduct,
} from '../../../components/molecules';

function Checkout({route}) {
  const {itemData} = route.params;
  const {navigation, form, onChangeText, handleCheckout} = useAction();

  return (
    <>
      <Container
        bgColor={color.white7}
        navbar={{
          type: 'fixed',
          title: 'Checkout Details',
          onClick: () => navigation.goBack(),
        }}>
        <View style={stylesCust.card}>
          <Text style={styles.h5(color.bluep1)}>List Item</Text>
          <Divider height={10} />
          {itemData?.detail?.length > 0 ? (
            <View>
              {itemData.detail
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((item, index) => (
                  <TileProduct key={index} item={item} checkout={true} />
                ))}
            </View>
          ) : form.detail?.length > 0 ? (
            <View>
              {form.detail
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((item, index) => (
                  <TileProduct key={index} item={item} checkout={true} />
                ))}
            </View>
          ) : null}
        </View>
        <View style={stylesCust.card}>
          <View style={stylesCust.newCard}>
            <Text style={styles.h5(color.bluep1)}>Detail Information</Text>
            <Divider height={20} />
            <FormInput
              label="Fullname"
              placeholder="Your fullname"
              type="outline"
              disabled={itemData?.name ? true : false}
              value={itemData?.name ? itemData.name : form.name}
              onChangeText={value => onChangeText('name', value)}
            />
            <FormInput
              label="Email"
              placeholder="Your email"
              type="outline"
              disabled={itemData?.email ? true : false}
              value={itemData?.email ? itemData.email : form.email}
              onChangeText={value => onChangeText('email', value)}
            />
            <FormInput
              label="Address"
              placeholder="Your address"
              type="outline"
              multiline={true}
              disabled={itemData?.address ? true : false}
              value={itemData?.address ? itemData.address : form.address}
              onChangeText={value => onChangeText('address', value)}
            />
          </View>
        </View>
        <View style={stylesCust.card}>
          <View style={stylesCust.newCard}>
            <Text style={styles.h5(color.bluep1)}>Payment Summary</Text>
            <Divider height={20} />
            <DetailPayment
              label="Subtotal"
              value={helpers.formatCurrency(
                parseFloat(itemData?.total ? itemData.total : form.total),
                '$',
              )}
            />
            <DetailPayment
              label="Shipping Cost"
              value={helpers.formatCurrency(parseFloat(0), '$')}
            />
            <DetailPayment
              label="Discount"
              value={helpers.formatCurrency(parseFloat(0), '$')}
            />
            <Divider height={5} />
            <DetailPayment
              type="total"
              label="Total"
              value={helpers.formatCurrency(
                parseFloat(itemData?.total ? itemData.total : form.total),
                '$',
              )}
            />
          </View>
        </View>
      </Container>
      {itemData?.total ? null : (
        <View style={stylesCust.footer}>
          <Text style={styles.h3()}>
            Total : {helpers.formatCurrency(parseFloat(form.total), '$')}
          </Text>
          <ButtonLabel
            type="primary"
            solid={true}
            label="Checkout!"
            size="large"
            disabled={
              form?.name &&
              form?.email &&
              form?.address &&
              form?.detail?.length > 0
                ? false
                : true
            }
            onClick={() => handleCheckout()}
          />
        </View>
      )}
    </>
  );
}

export default Checkout;
