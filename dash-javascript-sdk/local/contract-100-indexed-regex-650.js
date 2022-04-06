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
const contractDocuments = {"note":{"type":"object","indices":[{"name":"unique0","properties":[{"abc0":"asc"},{"abc1":"asc"},{"abc2":"asc"},{"abc3":"asc"},{"abc4":"asc"},{"abc5":"asc"},{"abc6":"asc"},{"abc7":"asc"},{"abc8":"asc"},{"abc9":"asc"}],"unique":true},{"name":"unique1","properties":[{"abc10":"asc"},{"abc11":"asc"},{"abc12":"asc"},{"abc13":"asc"},{"abc14":"asc"},{"abc15":"asc"},{"abc16":"asc"},{"abc17":"asc"},{"abc18":"asc"},{"abc19":"asc"}],"unique":true},{"name":"unique2","properties":[{"abc20":"asc"},{"abc21":"asc"},{"abc22":"asc"},{"abc23":"asc"},{"abc24":"asc"},{"abc25":"asc"},{"abc26":"asc"},{"abc27":"asc"},{"abc28":"asc"},{"abc29":"asc"}],"unique":true},{"name":"non_unique0","properties":[{"abc30":"asc"},{"abc31":"asc"},{"abc32":"asc"},{"abc33":"asc"},{"abc34":"asc"},{"abc35":"asc"},{"abc36":"asc"},{"abc37":"asc"},{"abc38":"asc"},{"abc39":"asc"}],"unique":false},{"name":"non_unique1","properties":[{"abc40":"asc"},{"abc41":"asc"},{"abc42":"asc"},{"abc43":"asc"},{"abc44":"asc"},{"abc45":"asc"},{"abc46":"asc"},{"abc47":"asc"},{"abc48":"asc"},{"abc49":"asc"}],"unique":false},{"name":"non_unique2","properties":[{"abc50":"asc"},{"abc51":"asc"},{"abc52":"asc"},{"abc53":"asc"},{"abc54":"asc"},{"abc55":"asc"},{"abc56":"asc"},{"abc57":"asc"},{"abc58":"asc"},{"abc59":"asc"}],"unique":false},{"name":"non_unique3","properties":[{"abc60":"asc"},{"abc61":"asc"},{"abc62":"asc"},{"abc63":"asc"},{"abc64":"asc"},{"abc65":"asc"},{"abc66":"asc"},{"abc67":"asc"},{"abc68":"asc"},{"abc69":"asc"}],"unique":false},{"name":"non_unique4","properties":[{"abc70":"asc"},{"abc71":"asc"},{"abc72":"asc"},{"abc73":"asc"},{"abc74":"asc"},{"abc75":"asc"},{"abc76":"asc"},{"abc77":"asc"},{"abc78":"asc"},{"abc79":"asc"}],"unique":false},{"name":"non_unique5","properties":[{"abc80":"asc"},{"abc81":"asc"},{"abc82":"asc"},{"abc83":"asc"},{"abc84":"asc"},{"abc85":"asc"},{"abc86":"asc"},{"abc87":"asc"},{"abc88":"asc"},{"abc89":"asc"}],"unique":false},{"name":"non_unique6","properties":[{"abc90":"asc"},{"abc91":"asc"},{"abc92":"asc"},{"abc93":"asc"},{"abc94":"asc"},{"abc95":"asc"},{"abc96":"asc"},{"abc97":"asc"},{"abc98":"asc"},{"abc99":"asc"}],"unique":false}],"properties":{"abc0":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc1":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc2":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc3":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc4":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc5":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc6":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc7":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc8":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc9":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc10":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc11":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc12":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc13":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc14":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc15":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc16":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc17":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc18":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc19":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc20":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc21":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc22":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc23":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc24":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc25":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc26":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc27":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc28":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc29":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc30":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc31":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc32":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc33":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc34":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc35":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc36":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc37":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc38":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc39":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc40":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc41":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc42":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc43":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc44":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc45":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc46":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc47":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc48":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc49":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc50":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc51":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc52":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc53":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc54":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc55":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc56":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc57":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc58":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc59":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc60":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc61":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc62":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc63":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc64":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc65":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc66":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc67":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc68":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc69":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc70":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc71":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc72":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc73":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc74":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc75":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc76":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc77":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc78":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc79":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc80":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc81":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc82":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc83":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc84":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc85":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc86":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc87":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc88":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc89":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc90":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc91":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc92":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc93":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc94":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc95":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc96":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc97":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc98":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63},"abc99":{"type":"string","pattern":"^[a-zA-Z$][a-zA-Z0-9-_.]{1,650}[a-zA-Z0-9]$","maxLength":63}},"additionalProperties":false}}




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