const Dash = require('dash');

const mnemonic = 'science loop faculty paper flight turn window tornado warm rebel muffin seat'
const network = 'local';

const client = new Dash.Client({
  network,
  wallet: {
    mnemonic,
  },
  // Override DPNS contract ID (for testing against devnets)
  apps: {
    dpns: {
      contractId: 'GWRSAVFMjXx8HpQFaNJMqBV7MBgMK4br5UESsB4S31Ec',
    },
  },
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


  // Register contract
const contractDocuments = 

{
	"abc0": {
		"type": "object",
		"indices": [{
			"name": "abc0",
			"properties": [{
				"abc0": {
					"type": "string",
					"maxLength": 63
				},
				"abc1": {
					"type": "string",
					"maxLength": 63
				},
				"abc2": {
					"type": "string",
					"maxLength": 63
				}
			}],
			"unique": true
		}],
		"properties": {
			"abc0": {
				"type": "string",
				"maxLength": 63
			},
			"abc1": {
				"type": "string",
				"maxLength": 63
			},
			"abc2": {
				"type": "string",
				"maxLength": 63
			}
		},
		"additionalProperties": false
	}
}




  const contract = await platform.contracts.create(contractDocuments, identity);


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