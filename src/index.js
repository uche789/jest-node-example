// https://github.com/babel/example-node-server

const calculateSum = (array) => {
  if (Array.isArray(array)) throw new TypeError('Paramter should be an array');

  return array.reduce((acc, value) => acc + value);
};

export default {
  calculateSum,
};
