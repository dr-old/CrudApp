import {axios, axiosFake} from './axiosDeclaration';

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

export const putApiFake = async payload => {
  try {
    const response = await axiosFake.put(payload.link, payload.data);
    return response.data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
};
