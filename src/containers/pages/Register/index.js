import React from 'react';
import {View, Image, Text, Platform} from 'react-native';
import {color, styles} from '../../../utils/styles';
import {FormInput} from '../../../components/molecules';
import {ButtonLabel, Divider, OptionLabel} from '../../../components/atoms';
import stylesCust from './stylesCust';
import useAction from './useAction';
import {Container} from '../../organism';

const Register = () => {
  const {
    navigation,
    isToogle,
    form,
    user,
    signUp,
    signUpValidate,
    setToogle,
    onChangeText,
  } = useAction();

  return (
    <Container loading={user.loading}>
      <View style={stylesCust.header}>
        <Text style={styles.h2()}>Sign Up</Text>
        <Divider height={5} />
        <Text style={styles.p4()}>
          Create your account to start your journey
        </Text>
      </View>
      <Divider height={50} />
      <View style={stylesCust.groupInput}>
        <View style={stylesCust.groupItem}>
          <FormInput
            label="Name"
            placeholder="Your first name"
            type="solid"
            value={form.firstName}
            onChangeText={value => onChangeText('firstName', value)}
          />
        </View>
        <View style={stylesCust.groupItem}>
          <FormInput
            label={' '}
            placeholder="Your last name"
            type="solid"
            value={form.lastName}
            onChangeText={value => onChangeText('lastName', value)}
          />
        </View>
      </View>
      <View style={stylesCust.contentBody}>
        <FormInput
          label="Email"
          placeholder="Your email"
          type="solid"
          value={form.email}
          onChangeText={value => onChangeText('email', value)}
        />
        <FormInput
          label={'Password'}
          placeholder="Your password"
          type="solid"
          secureTextEntry={isToogle}
          value={form.password}
          onChangeText={value => onChangeText('password', value)}
          icon={{
            name: !isToogle ? 'eye' : 'eye-off',
            color: color.grey2,
            onClick: () => setToogle(!isToogle),
          }}
        />
        <Divider height={Platform.OS === 'ios' ? 10 : 20} />
        <ButtonLabel
          type="success"
          solid={true}
          label="Sign Up!"
          size="large"
          disabled={!signUpValidate()}
          onClick={() => signUp()}
        />
        <OptionLabel
          title="Already have account ? "
          subtitle="Sign In"
          onClick={() => navigation.push('Login')}
        />
      </View>
    </Container>
  );
};

export default Register;
