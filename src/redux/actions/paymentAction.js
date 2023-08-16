import {types} from './types';

export function chargePaymentData(data) {
  return {
    type: types.CHARGE_PAYMENT,
    payload: data,
  };
}

export function statusPaymentData(data) {
  return {
    type: types.STATUS_PAYMENT,
    payload: data,
  };
}

export function historyPaymentData(data) {
  return {
    type: types.GET_PAYMENT,
    payload: data,
  };
}
