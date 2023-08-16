import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Divider} from '../../components/atoms';
import {
  BarHeader,
  LoadingExtern,
  NavHeader,
  NavHome,
} from '../../components/molecules';
import {color} from '../../utils/styles';

const Container = ({
  refScroll,
  refreshControl,
  onScroll,
  bgColor,
  children,
  navbar,
  bottom,
  loading,
  scrollview = true,
}) => {
  return (
    <View style={stylesCust.page}>
      <BarHeader bgcolor={bgColor} />
      {navbar?.type === 'fixed' ? (
        <NavHeader
          title={navbar?.title}
          subtitle={navbar?.subtitle}
          value={navbar?.value}
          onChangeText={navbar?.onChangeText}
          onSearch={navbar?.onSearch}
          onProfile={navbar?.onProfile}
          onClick={navbar?.onClick}
          onClear={navbar?.onClear}
        />
      ) : null}
      {scrollview ? (
        <ScrollView
          style={stylesCust.container(bgColor)}
          ref={refScroll}
          onScroll={onScroll}
          refreshControl={refreshControl}>
          {navbar?.type === 'nofixed' ? (
            <NavHeader
              title={navbar?.title}
              subtitle={navbar?.subtitle}
              value={navbar?.value}
              onChangeText={navbar?.onChangeText}
              onSearch={navbar?.onSearch}
              onProfile={navbar?.onProfile}
              onClick={navbar?.onClick}
              onClear={navbar?.onClear}
            />
          ) : null}
          {navbar?.type === 'home' ? (
            <NavHome
              title={navbar?.title}
              subtitle={navbar?.subtitle}
              value={navbar?.value}
              onChangeText={navbar?.onChangeText}
              onSearch={navbar?.onSearch}
              onFavorite={navbar?.onFavorite}
              onClick={navbar?.onClick}
              onCart={navbar?.onCart}
            />
          ) : null}
          {children}
          <Divider height={50} />
        </ScrollView>
      ) : (
        <View style={{flex: 1, paddingHorizontal: 20}}>
          {navbar?.type === 'nofixed' ? (
            <NavHeader
              title={navbar?.title}
              subtitle={navbar?.subtitle}
              value={navbar?.value}
              onChangeText={navbar?.onChangeText}
              onSearch={navbar?.onSearch}
              onProfile={navbar?.onProfile}
              onClick={navbar?.onClick}
              onClear={navbar?.onClear}
            />
          ) : null}
          {navbar?.type === 'home' ? (
            <NavHome
              title={navbar?.title}
              subtitle={navbar?.subtitle}
              value={navbar?.value}
              onChangeText={navbar?.onChangeText}
              onSearch={navbar?.onSearch}
              onFavorite={navbar?.onFavorite}
              onClick={navbar?.onClick}
              onCart={navbar?.onCart}
            />
          ) : null}
          {children}
          {/* <Divider height={50} /> */}
        </View>
      )}
      {bottom ? bottom : null}
      {loading ? <LoadingExtern /> : null}
    </View>
  );
};
const stylesCust = StyleSheet.create({
  page: {flex: 1},
  container: (backgroundColor = color.white) => ({
    backgroundColor: backgroundColor,
  }),
});

export default Container;
