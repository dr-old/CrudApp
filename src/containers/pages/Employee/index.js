import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {ButtonIcon, ButtonLabel, Divider} from '../../../components/atoms';
import {CardProduct} from '../../../components/molecules';
import helpers from '../../../utils/helpers';
import {color, styles} from '../../../utils/styles';
import {Container} from '../../organism';
import stylesCust from './stylesCust';
import useAction from './useAction';

function Employee({route}) {
  const {itemData, itemId} = route.params;
  const {navigation, qty, products, handleGetProduct} = useAction();
  const [isMounted, setMounted] = useState(true);

  // useEffect(() => {
  //   if (isMounted) {
  //     handleGetProduct(itemData.id);
  //   }
  //   return () => {
  //     setMounted(false);
  //   };
  // });

  return (
    <>
      <Container
        bgColor={color.white9}
        navbar={{
          type: 'fixed',
          title: 'Detail',
          onClick: () => navigation.goBack(),
        }}>
        {itemData?.first_name ? (
          <>
            <View style={stylesCust.card}>
              <View style={stylesCust.cardHeader}>
                <ButtonIcon
                  type={{
                    backgroundColor: color.green7,
                    borderColor: color.green7,
                    color: color.tblack,
                  }}
                  name="user"
                  size={25}
                  disabled={true}
                />
                <Divider width={20} />
                <View style={stylesCust.cardTitle}>
                  <Text style={styles.h4(color.tblack)} numberOfLines={1}>
                    {itemData.company_name}
                  </Text>
                  <Text style={styles.p4(color.tgrey)}>
                    {itemData.first_name + ' ' + itemData.last_name}
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => Linking.openURL(itemData.web)}
                style={stylesCust.cardPrice}>
                <Text
                  numberOfLines={1}
                  style={styles.textBase(
                    12,
                    color.green4,
                    'textSemiBold',
                    'none',
                  )}>
                  {itemData.web}
                </Text>
              </TouchableOpacity>
              <View style={stylesCust.cardDesc}>
                <Text style={styles.h5()}>Contact Us</Text>
                <Divider height={10} />
                <Text style={styles.p4(color.tgrey)}>
                  {itemData.phone1 + ' | ' + itemData.phone2}
                </Text>
                <Text
                  onPress={() => Linking.openURL(`mailto:${itemData.email}`)}
                  style={styles.textBase(
                    12,
                    color.green4,
                    'textRegular',
                    'none',
                  )}>
                  {itemData.email}
                </Text>
              </View>
              <View style={stylesCust.cardDesc}>
                <Text style={styles.h5()}>Address</Text>
                <Divider height={10} />
                <Text style={styles.p4(color.tgrey)}>{itemData.address}</Text>
                <Text style={styles.p4(color.tgrey)}>
                  {itemData.city +
                    ', ' +
                    itemData.state +
                    ', ' +
                    itemData.zip +
                    ', ' +
                    itemData.county}
                </Text>
              </View>
            </View>
          </>
        ) : null}
      </Container>
      {/* {Employee.dataDetail?.id ? (
        <View style={stylesCust.footer}>
          <ButtonLabel
            type="primary"
            solid={true}
            label="Add to Cart!"
            size="large"
            onClick={() => handleAddCart(products.dataDetail)}
          />
        </View>
      ) : null} */}
    </>
  );
}

export default Employee;
