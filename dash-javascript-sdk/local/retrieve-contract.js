const Dash = require('dash');

const client = new Dash.Client({network: 'local'});

const retrieveContract = async () => {
  const contractId = 'B1NghajMjMRGxoBgewfRFBWm275PAareabemtCUhyfvc';
  return client.platform.contracts.get(contractId);
};

retrieveContract()
  .then((d) => console.dir(d.toJSON(), { depth: 5 }))
  .catch((e) => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());