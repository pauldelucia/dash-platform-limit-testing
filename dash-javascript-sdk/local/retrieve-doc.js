const Dash = require('dash');

const clientOpts = {
  network: 'local',
  apps: {
    tutorialContract: {
      contractId: 'GqevRNY4tszkuhWz52DSeNovNPopkd5RVkGTGxfYFoEX',
    },
  },
};
const client = new Dash.Client(clientOpts);

const getDocuments = async () => {
  return client.platform.documents.get(
    'tutorialContract.abc0',
    {
      limit: 10, // Number of docs to retrieve
    },
  );
};

getDocuments()
  .then((d) => {
    for (const n of d) {
      console.log('Document(s):\n');
	console.dir(n.toJSON(), {depth: null});
    }
  })
  .catch((e) => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());
