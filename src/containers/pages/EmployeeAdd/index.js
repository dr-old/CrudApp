import * as React from 'react';
import {View, Text} from 'react-native';
import {ButtonLabel, Divider} from '../../../components/atoms';
import {FormInput, TileProduct} from '../../../components/molecules';
import {color} from '../../../utils/styles';
import {Container} from '../../organism';
import stylesCust from './stylesCust';
import useAction from './useAction';

function EmployeeAdd() {
  const {
    navigation,
    employee,
    form,
    handleValidate,
    handleCancel,
    handleSubmit,
    onChangeText,
  } = useAction();

  return (
    <Container
      bgColor={color.white9}
      loading={employee.loading}
      navbar={{
        type: 'nofixed',
        title: 'Create Employee',
        subtitle: 'Please fill in the form to new Employee',
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
          label="Email"
          placeholder="Your email"
          type="solid"
          solid={color.white}
          value={form?.email}
          onChangeText={value => onChangeText('email', value)}
        />
        <FormInput
          label="Company"
          placeholder="Your company name"
          type="solid"
          solid={color.white}
          value={form?.company_name}
          onChangeText={value => onChangeText('company_name', value)}
        />
      </View>
      <View style={stylesCust.groupInput}>
        <View style={stylesCust.groupItem}>
          <FormInput
            label="Phone"
            placeholder="Your phone 1"
            type="solid"
            keyboardType="phone-pad"
            solid={color.white}
            value={form?.phone1}
            onChangeText={value => onChangeText('phone1', value)}
          />
        </View>
        <View style={stylesCust.groupItem}>
          <FormInput
            label={' '}
            placeholder="Your phone 2"
            type="solid"
            keyboardType="phone-pad"
            solid={color.white}
            value={form?.phone2}
            onChangeText={value => onChangeText('phone2', value)}
          />
        </View>
      </View>
      <View style={stylesCust.card}>
        <FormInput
          label="Address"
          placeholder="Your company address"
          type="solid"
          multiline={true}
          solid={color.white}
          value={form?.address}
          onChangeText={value => onChangeText('address', value)}
        />
      </View>
      <View style={stylesCust.groupInput}>
        <View style={stylesCust.groupItem}>
          <FormInput
            label=""
            placeholder="Your city"
            type="solid"
            solid={color.white}
            value={form?.city}
            onChangeText={value => onChangeText('city', value)}
          />
        </View>
        <View style={stylesCust.groupItem}>
          <FormInput
            label=""
            placeholder="Your state"
            type="solid"
            solid={color.white}
            value={form?.state}
            onChangeText={value => onChangeText('state', value)}
          />
        </View>
      </View>
      <View style={stylesCust.groupInput}>
        <View style={stylesCust.groupItem}>
          <FormInput
            label=""
            placeholder="Your postal code"
            type="solid"
            solid={color.white}
            value={form?.zip}
            keyboardType="numeric"
            onChangeText={value => onChangeText('zip', value)}
          />
        </View>
        <View style={stylesCust.groupItem}>
          <FormInput
            label=""
            placeholder="Your country"
            type="solid"
            solid={color.white}
            value={form?.county}
            onChangeText={value => onChangeText('county', value)}
          />
        </View>
      </View>
      <View style={stylesCust.card}>
        <FormInput
          label="Website"
          placeholder="Your website"
          type="solid"
          solid={color.white}
          value={form?.web}
          keyboardType="url"
          onChangeText={value => onChangeText('web', value)}
        />
      </View>
      <View style={stylesCust.footer}>
        <ButtonLabel
          type="success-second"
          label="Cancel"
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
