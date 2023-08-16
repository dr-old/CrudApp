import {axios, axiosFake} from './axiosDeclaration';

export const getApi = async payload => {
  try {
    let params = payload.data ? {params: payload.data} : '';
    // axios.defaults.headers.common.Authorization =
    // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lc3RhbXAiOiJTYXQgTWFyIDI1IDIwMjMgMDY6NDc6MTEgR01UKzAwMDAgKENvb3JkaW5hdGVkIFVuaXZlcnNhbCBUaW1lKSIsInVzZXJfcm9sZSI6Im9wZXJhdG9yIiwidXNlcl9pZCI6MjAyMiwiaWF0IjoxNjc5NzI2ODMxLCJleHAiOjE2Nzk4MTMyMzF9.pc_XVp9rRe9phMVGo22dKzUlZeF1FMIPjZ1ffLOUZJs';
    // axios.defaults.headers.common.Authorization = `Bearer ${payload.token}`;
    const response = await axios.get(payload.link, params);
    return response.data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export const postApi = async payload => {
  try {
    // axios.defaults.headers.common.Authorization =
    // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lc3RhbXAiOiJTYXQgTWFyIDI1IDIwMjMgMDY6NDc6MTEgR01UKzAwMDAgKENvb3JkaW5hdGVkIFVuaXZlcnNhbCBUaW1lKSIsInVzZXJfcm9sZSI6Im9wZXJhdG9yIiwidXNlcl9pZCI6MjAyMiwiaWF0IjoxNjc5NzI2ODMxLCJleHAiOjE2Nzk4MTMyMzF9.pc_XVp9rRe9phMVGo22dKzUlZeF1FMIPjZ1ffLOUZJs';
    // axios.defaults.headers.common.Authorization = `Bearer ${payload.token}`;
    console.log(payload);
    const response = await axios.post(payload.link, payload.data);
    console.log('1', response?.data);
    return response?.data;
  } catch (err) {
    console.log('2', err);
    return err.response?.data;
  }
};

export const patchApi = async payload => {
  try {
    const response = await axios.patch(payload.link, payload.data);
    return response.data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export const putApi = async payload => {
  try {
    const response = await axios.put(payload.link, payload.data);
    return response.data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

// for api fake

export const getApiFake = async payload => {
  try {
    let params = payload.data ? {params: payload.data} : '';
    const response = await axiosFake.get(payload.link, params);
    return response.data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};

export const postApiFake = async payload => {
  try {
    const response = await axiosFake.post(payload.link, payload.data);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};
