// https://github.com/babel/example-node-server

const calculateSum = (array) => {
  console.assert(Array.isArray(array), 'Paramter should be an array');

  return array.reduce((acc, value) => {
    return acc + value;
  });
}

export default {
  calculateSum
};