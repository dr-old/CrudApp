import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {ButtonIcon, ButtonLabel, Divider} from '../../../components/atoms';
import {CardProduct} from '../../../components/molecules';
import helpers from '../../../utils/helpers';
import {color, styles} from '../../../utils/styles';
import {Container} from '../../organism';
import stylesCust from './stylesCust';
import useAction from './useAction';

function Product({route}) {
  const {itemData} = route.params;
  const {
    navigation,
    qty,
    products,
    handleFamilarProduct,
    handleGetFavorite,
    handleSetFavorite,
    handleCart,
    handleAddCart,
    handleGetProduct,
  } = useAction();
  const [isMounted, setMounted] = useState(true);

  useEffect(() => {
    if (isMounted) {
      handleGetProduct(itemData.id);
    }
    return () => {
      setMounted(false);
    };
  });

  return (
    <>
      <Container loading={products.loading} bgColor={color.white9}>
        {products.dataDetail?.id ? (
          <>
            <Image
              source={{uri: products.dataDetail.image}}
              style={stylesCust.image}
            />
            <View style={stylesCust.goBack}>
              <ButtonIcon
                type={stylesCust.buttonType(color.tblack, color.white5)}
                name="chevron-left"
                size={20}
                borderRadius={38}
                onClick={() => navigation.goBack()}
              />
            </View>
            <View style={stylesCust.card}>
              <View style={stylesCust.cardHeader}>
                <View style={stylesCust.cardTitle}>
                  <Text style={styles.h3(color.tblack)}>
                    {products.dataDetail.title}
                  </Text>
                  <Text style={styles.p4(color.tgrey)}>
                    {products.dataDetail.category}
                  </Text>
                </View>
                <ButtonIcon
                  type={
                    handleGetFavorite(products.dataDetail.id)
                      ? stylesCust.buttonType(color.white, color.bluep5)
                      : 'default'
                  }
                  name="heart"
                  size={20}
                  borderRadius={38}
                  onClick={() =>
                    handleSetFavorite(
                      products.dataDetail,
                      handleGetFavorite(products.dataDetail.id) ? false : true,
                    )
                  }
                />
              </View>
              <View style={stylesCust.qty}>
                <ButtonIcon
                  type={qty <= 1 ? 'default' : 'primary'}
                  disabled={qty <= 1 ? true : false}
                  onClick={() => handleCart('minus')}
                  name="minus"
                  borderRadius={25}
                  size={15}
                />
                <Divider width={20} />
                <Text style={styles.h3()}>{qty}</Text>
                <Divider width={20} />
                <ButtonIcon
                  type={'primary'}
                  onClick={() => handleCart('plus')}
                  name="plus"
                  borderRadius={25}
                  size={15}
                />
              </View>
              <View style={stylesCust.cardPrice}>
                <Text style={styles.h5()}>Price</Text>
                <Text style={styles.h4(color.bluep5)}>
                  {helpers.formatCurrency(products.dataDetail.price, '$')}
                </Text>
              </View>
              <View style={stylesCust.cardDesc}>
                <Text style={styles.h5()}>Description</Text>
                <Divider height={10} />
                <Text style={styles.p4(color.tgrey)}>
                  {products.dataDetail.description}
                </Text>
              </View>

              <Text style={[styles.h5(color.tblack), stylesCust.similarText]}>
                Familiar Product
              </Text>

              {handleFamilarProduct()?.length > 0 ? (
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <Divider width={30} />
                  {handleFamilarProduct().map((item, index) => (
                    <CardProduct
                      key={index}
                      item={item}
                      marginRight={30}
                      onClick={() =>
                        navigation.push('Product', {itemData: item})
                      }
                    />
                  ))}
                </ScrollView>
              ) : null}
            </View>
          </>
        ) : null}
      </Container>
      {products.dataDetail?.id ? (
        <View style={stylesCust.footer}>
          <ButtonLabel
            type="primary"
            solid={true}
            label="Add to Cart!"
            size="large"
            onClick={() => handleAddCart(products.dataDetail)}
          />
        </View>
      ) : null}
    </>
  );
}

export default Product;
