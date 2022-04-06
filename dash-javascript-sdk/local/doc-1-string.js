const Dash = require('dash');

const clientOpts = {
  network: 'local',
  wallet: {
    mnemonic: 'science loop faculty paper flight turn window tornado warm rebel muffin seat',
    unsafeOptions: {
      skipSynchronizationBeforeHeight: 0, // only sync from mid-2021
    },
  },
  apps: {
    tutorialContract: {
      contractId: 'D4X4bkVvHSzc4b7XsbUWoXV1d8E9jDQRWFeqTzMTpAPx',
    },
  },
};
const client = new Dash.Client(clientOpts);

const submitNoteDocument = async () => {
  const { platform } = client;
  // Register identity
  const registeredIdentity = await platform.identities.register();
  console.log(JSON.stringify(registeredIdentity, '', 2));

  // Retrieve identity
  const identity = await platform.identities.get(registeredIdentity.getId());
  // console.log(identity);

  const docProperties = {"abc0":"SCSqhOnUvGRdmYXYQUvicFwXxdAQqdVyIqarpaNWfiDFXcoNZXGhNsJKQAMoiVH"}




  // Create the note document
  const noteDocument = await platform.documents.create(
    'tutorialContract.note',
    identity,
    docProperties,
  );

  const documentBatch = {
    create: [noteDocument], // Document(s) to create
    replace: [],            // Document(s) to update
    delete: [],             // Document(s) to delete
  };
  // Sign and submit the document(s)
  return platform.documents.broadcast(documentBatch, identity);
};

submitNoteDocument()
  .then((d) => console.log(d))
  .catch((e) => console.error('Something went wrong:\n', e))
  .finally(() => client.disconnect());