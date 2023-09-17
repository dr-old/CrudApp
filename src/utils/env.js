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
  FIREBASE: {
    serverKey:
      'AAAAFRWKeU4:APA91bE4JiP251axnJZB4y5uYn-12yv6j65BlEFQs9lDveX6mXxMZKAlwivR_MveR26LmxOOJT-A3wbr-k1YKYnqKkmjnqrbN1L6Do55v6UQWf6v2mrlHzWCWXIJUrh5eRftLd3BthPG',
  },
};

export default env;
