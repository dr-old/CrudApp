const env = {
  CONFIGIPAY: {
    baseURL: 'https://sandbox.ipaymu.com/api/v2/',
    headers: {
      'Content-Type': 'application/json',
      va: '1179000899',
      timestamp: '20191209155701',
    },
  },
  CONFIGFAKE: {
    // baseURL: 'https://fakestoreapi.com/',
    baseURL: 'https://reqres.in/api/',
  },
  CONFIG: {
    baseURL: 'http://localhost:3000/',
    // baseURL: 'https://employee-api-kappa.vercel.app/',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
};

export default env;
