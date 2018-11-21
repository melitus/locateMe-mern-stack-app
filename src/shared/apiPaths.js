export default {
  path: 'http://localhost:4012/api/v1/',
  children: {
    payment: {
      path: 'companies/'
    },
  }
};
