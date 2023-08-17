import * as React from 'react';
import {View} from 'react-native';
import {ButtonLabel, Divider} from '../../../components/atoms';
import {FormInput} from '../../../components/molecules';
import {color} from '../../../utils/styles';
import {Container} from '../../organism';
import stylesCust from './stylesCust';
import useAction from './useAction';

function EmployeeAdd() {
  const {
    navigation,
    userCreate,
    form,
    handleValidate,
    handleCancel,
    handleSubmit,
    onChangeText,
  } = useAction();

  return (
    <Container
      bgColor={color.white9}
      loading={userCreate?.loading}
      scrollview={false}
      navbar={{
        type: 'nofixed',
        title: 'Create User',
        onClick: () => navigation.goBack(),
      }}>
      <Divider height={20} />
      <View style={stylesCust.groupInput}>
        <View style={stylesCust.groupItem}>
          <FormInput
            label="Name"
            placeholder="Your first name"
            type="solid"
            solid={color.white}
            value={form?.first_name}
            onChangeText={value => onChangeText('first_name', value)}
          />
        </View>
        <View style={stylesCust.groupItem}>
          <FormInput
            label={' '}
            placeholder="Your last name"
            type="solid"
            solid={color.white}
            value={form?.last_name}
            onChangeText={value => onChangeText('last_name', value)}
          />
        </View>
      </View>
      <View style={stylesCust.card}>
        <FormInput
          label="Jobs"
          placeholder="Your jobs"
          type="solid"
          solid={color.white}
          value={form?.job}
          onChangeText={value => onChangeText('job', value)}
        />
      </View>
      <View style={stylesCust.footer}>
        <ButtonLabel
          type="success-second"
          label="Reset"
          size="large"
          full="47%"
          onClick={() => handleCancel()}
        />
        <ButtonLabel
          type="success"
          solid={true}
          label="Submit"
          size="large"
          full="47%"
          disabled={!handleValidate()}
          onClick={() => handleSubmit()}
        />
      </View>
    </Container>
  );
}

export default EmployeeAdd;
