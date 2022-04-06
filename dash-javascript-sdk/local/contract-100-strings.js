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

  // Define a reusable object
  const definitions = {"regex":{"type":"string","maxLength":63}
  };

  // Register contract
const contractDocuments = {"abc0":{"type":"object","properties":{"abc0":{"type":"string","maxLength":63},"abc1":{"type":"string","maxLength":63},"abc2":{"type":"string","maxLength":63},"abc3":{"type":"string","maxLength":63},"abc4":{"type":"string","maxLength":63},"abc5":{"type":"string","maxLength":63},"abc6":{"type":"string","maxLength":63},"abc7":{"type":"string","maxLength":63},"abc8":{"type":"string","maxLength":63},"abc9":{"type":"string","maxLength":63},"abc10":{"type":"string","maxLength":63},"abc11":{"type":"string","maxLength":63},"abc12":{"type":"string","maxLength":63},"abc13":{"type":"string","maxLength":63},"abc14":{"type":"string","maxLength":63},"abc15":{"type":"string","maxLength":63},"abc16":{"type":"string","maxLength":63},"abc17":{"type":"string","maxLength":63},"abc18":{"type":"string","maxLength":63},"abc19":{"type":"string","maxLength":63},"abc20":{"type":"string","maxLength":63},"abc21":{"type":"string","maxLength":63},"abc22":{"type":"string","maxLength":63},"abc23":{"type":"string","maxLength":63},"abc24":{"type":"string","maxLength":63},"abc25":{"type":"string","maxLength":63},"abc26":{"type":"string","maxLength":63},"abc27":{"type":"string","maxLength":63},"abc28":{"type":"string","maxLength":63},"abc29":{"type":"string","maxLength":63},"abc30":{"type":"string","maxLength":63},"abc31":{"type":"string","maxLength":63},"abc32":{"type":"string","maxLength":63},"abc33":{"type":"string","maxLength":63},"abc34":{"type":"string","maxLength":63},"abc35":{"type":"string","maxLength":63},"abc36":{"type":"string","maxLength":63},"abc37":{"type":"string","maxLength":63},"abc38":{"type":"string","maxLength":63},"abc39":{"type":"string","maxLength":63},"abc40":{"type":"string","maxLength":63},"abc41":{"type":"string","maxLength":63},"abc42":{"type":"string","maxLength":63},"abc43":{"type":"string","maxLength":63},"abc44":{"type":"string","maxLength":63},"abc45":{"type":"string","maxLength":63},"abc46":{"type":"string","maxLength":63},"abc47":{"type":"string","maxLength":63},"abc48":{"type":"string","maxLength":63},"abc49":{"type":"string","maxLength":63},"abc50":{"type":"string","maxLength":63},"abc51":{"type":"string","maxLength":63},"abc52":{"type":"string","maxLength":63},"abc53":{"type":"string","maxLength":63},"abc54":{"type":"string","maxLength":63},"abc55":{"type":"string","maxLength":63},"abc56":{"type":"string","maxLength":63},"abc57":{"type":"string","maxLength":63},"abc58":{"type":"string","maxLength":63},"abc59":{"type":"string","maxLength":63},"abc60":{"type":"string","maxLength":63},"abc61":{"type":"string","maxLength":63},"abc62":{"type":"string","maxLength":63},"abc63":{"type":"string","maxLength":63},"abc64":{"type":"string","maxLength":63},"abc65":{"type":"string","maxLength":63},"abc66":{"type":"string","maxLength":63},"abc67":{"type":"string","maxLength":63},"abc68":{"type":"string","maxLength":63},"abc69":{"type":"string","maxLength":63},"abc70":{"type":"string","maxLength":63},"abc71":{"type":"string","maxLength":63},"abc72":{"type":"string","maxLength":63},"abc73":{"type":"string","maxLength":63},"abc74":{"type":"string","maxLength":63},"abc75":{"type":"string","maxLength":63},"abc76":{"type":"string","maxLength":63},"abc77":{"type":"string","maxLength":63},"abc78":{"type":"string","maxLength":63},"abc79":{"type":"string","maxLength":63},"abc80":{"type":"string","maxLength":63},"abc81":{"type":"string","maxLength":63},"abc82":{"type":"string","maxLength":63},"abc83":{"type":"string","maxLength":63},"abc84":{"type":"string","maxLength":63},"abc85":{"type":"string","maxLength":63},"abc86":{"type":"string","maxLength":63},"abc87":{"type":"string","maxLength":63},"abc88":{"type":"string","maxLength":63},"abc89":{"type":"string","maxLength":63},"abc90":{"type":"string","maxLength":63},"abc91":{"type":"string","maxLength":63},"abc92":{"type":"string","maxLength":63},"abc93":{"type":"string","maxLength":63},"abc94":{"type":"string","maxLength":63},"abc95":{"type":"string","maxLength":63},"abc96":{"type":"string","maxLength":63},"abc97":{"type":"string","maxLength":63},"abc98":{"type":"string","maxLength":63},"abc99":{"type":"string","maxLength":63}},"additionalProperties":false}}

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