const Dash = require('dash');

const mnemonic = 'science loop faculty paper flight turn window tornado warm rebel muffin seat'
const network = 'devnet';

const client = new Dash.Client({
  seeds: ['34.210.237.116'],
  network,
  wallet: {
    mnemonic,
  }
});

const doStuff = async () => {
  // Get wallet info
  const account = await client.getWalletAccount();
  const address = account.getUnusedAddress();

  const balance = await account.getTotalBalance();
  console.log(`Current balance: ${balance}`);

  if (balance <= 0) {
    // eslint-disable-next-line no-template-curly-in-string
    console.error(`No balance! Add funds to ${address.address}`);
    return;
  }

  const { platform } = client;

  // Register identity
  const registeredIdentity = await platform.identities.register();
  console.log(JSON.stringify(registeredIdentity, '', 2));

  // Retrieve identity
  const identity = await platform.identities.get(registeredIdentity.getId());
  // console.log(identity);

  // Define a reusable object
  const definitions = {"regex":{"type":"string","maxLength":63}
  };

  // Register contract
const contractDocuments = {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "object", "properties": {"abc0": {"type": "string", "pattern": "^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]$", "maxLength": 63}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}, "additionalProperties": false}}

  const contract = await platform.contracts.create(contractDocuments, identity);

  // Add reusable definitions referred to by "$ref" to contract
  // contract.setDefinitions(definitions);

  // Make sure contract passes validation checks
  await platform.dpp.initialize();
  const validationResult = await platform.dpp.dataContract.validate(contract);

  if (validationResult.isValid()) {
    console.log('Validation passed, broadcasting contract..');
    // Sign and submit the data contract
    const registeredContract = await platform.contracts.publish(contract, identity);
    console.log(JSON.stringify(registeredContract, '', 2));
  } else {
    console.error(validationResult); // An array of detailed validation errors
    throw validationResult.errors[0];
  }
};

doStuff()
  .catch((e) => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());