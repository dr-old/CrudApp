import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  RefreshControl,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {ButtonIcon, Divider} from '../../../components/atoms';
import Feather from 'react-native-vector-icons/Feather';
import {color, styles} from '../../../utils/styles';
import {Container} from '../../organism';
import stylesCust from './stylesCust';
import useAction from './useAction';
import {helpers} from '../../../utils';
import {CardArticle, TileArticle} from '../../../components/molecules';

function HomeUs() {
  const {navigation, products, category, user, refreshing, handleRefresh} =
    useAction();

  return (
    <Container
      loading={products.loading}
      bgColor={color.white9}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
      navbar={{
        type: 'home',
        title: `${user.data.firstName} ${user.data.lastName}`,
        onSearch: () => navigation.push('Products', {itemCategory: 'search'}),
        onCart: () => console.log(),
      }}>
      <View style={stylesCust.card}>
        <Image
          source={require('../../../../assets/illustration/Banner-Uhamka-Saving-Fix.png')}
          style={stylesCust.banner}
        />
      </View>
      <View style={stylesCust.card}>
        <View style={stylesCust.cardSaldo}>
          <View style={stylesCust.saldo}>
            <Text style={styles.p4()}>Main Balance</Text>
            <Text style={styles.h4()}>
              {helpers.formatCurrency(15200000, 'Rp. ')}
            </Text>
          </View>
          <ButtonIcon
            type={stylesCust.buttonType()}
            style={stylesCust.buttonPay}
            name="plus-square"
            label="Top Up"
            size={20}
            onClick={() => navigation.push('Topup')}
          />
          <ButtonIcon
            type={stylesCust.buttonType()}
            style={stylesCust.buttonPay}
            name="share"
            label="Pay"
            size={20}
            disabled={true}
          />
          <ButtonIcon
            type={stylesCust.buttonType()}
            style={stylesCust.buttonPay}
            name="send"
            label="Send"
            size={20}
            disabled={true}
          />
        </View>
      </View>
      <View style={stylesCust.feature}>
        {category?.length > 0
          ? category.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.push('Product', {itemData: item})}
                  key={index}
                  style={stylesCust.featureBox}>
                  <View style={stylesCust.featureIcon}>
                    <Feather name={item.image} size={30} color={color.white} />
                  </View>
                  <Text style={stylesCust.featureText}>{item.name}</Text>
                </TouchableOpacity>
              );
            })
          : null}
      </View>
      <View style={stylesCust.card}>
        <View style={stylesCust.cardTitle}>
          <Text style={styles.h5(color.tblack)}>Popular article</Text>
          <Text
            style={styles.h5(color.green4)}
            onPress={() =>
              navigation.push('Products', {itemCategory: 'others'})
            }>
            View All
          </Text>
        </View>
        <Divider height={10} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Divider width={30} />
        {products?.data?.length > 0
          ? products.data.map((item, index) => (
              <CardArticle
                key={index}
                item={item}
                onClick={() => navigation.push('Product', {itemData: item})}
              />
            ))
          : null}
        <Divider width={10} />
      </ScrollView>
      <View style={stylesCust.card}>
        <View style={stylesCust.cardTitle}>
          <Text style={styles.h5(color.tblack)}>Recent article</Text>
          <Text
            style={styles.h5(color.green4)}
            onPress={() =>
              navigation.push('Products', {itemCategory: 'others'})
            }>
            View All
          </Text>
        </View>
        <Divider height={10} />
        {products?.data?.length > 0
          ? products.data.map((item, index) => (
              <TileArticle
                key={index}
                item={item}
                onClick={() => navigation.push('Product', {itemData: item})}
              />
            ))
          : null}
      </View>
    </Container>
  );
}

export default HomeUs;
