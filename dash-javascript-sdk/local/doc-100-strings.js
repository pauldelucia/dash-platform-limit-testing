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
      contractId: '3TiBLjRDa3Du9mAJ6cimogjfavwDH4zHPX2UzbxDXKfK',
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

  const docProperties = {"abc0":"EgHsMrtzbMrJSaxixRWSNqIbXShASteoJxUBkAwMFcSveMPfLKLTyyMbwuMDXkl","abc1":"cFBshffTHODvnFZhxYAWeeSjDOFCxXKPvrDuCDscVjdTBsasrqDCSbPVpOfoTiW","abc2":"LcCJfGxbVKqanDuedliNPZKXQVFvUIWBcbghTxiVqKOJyfRYxHBcLgJmrFaGuam","abc3":"xyoTdxpKriPOphNRLoZjWsASyCUWSsQVesyZKaitNWNGZKHPitEGVjTgvaPSEtW","abc4":"tMgwAHZnHLxDMjjLZLeqoRZySbVSqGVTFiCTfXwNRIzvluzuPiHVyDuSrmJFDAt","abc5":"tpTWwqartwhkWnNPpitSwdRVilFIGCkAsWKwwSDYxsTMRxyzVJWLIjwnVKmJzbx","abc6":"PANLiEMyGdgGUStrFgDdQVrHaTnCahEEUgMcjudlutSXyoOhweZJilEkdqvXmLp","abc7":"jLirtHSzEVKvlrlpXBfoBhACJPNuSZCuRZGIPdWQKnDeyJwnArjtcMbfQTgwdXI","abc8":"MjAjvsWVZPXlcAxHXDPYoPnZfWpBFJveaiIDVBjOytXLPuGXSmIvVjpDuiMEnLK","abc9":"DogywSVdrGVpFsKbDQqSMqxJBfNqakjZahRquEaJINOyvuJdTBRjDkBGlVMpeSj","abc10":"sACdjeAKprDtVUWrJeCwQDACQKULmJJPWvHJfAKVCeiBqmiMAeNebbTiUIerzvY","abc11":"GktOALAcwxoNZuoINJFKeesjpjHZHwaIAkSzvyytkyGrHYWPDhswWbtoHGvfZhM","abc12":"EnVaTPXFxQRYwTXaatkSocHcIyAefHabtwzYVtKvEpnjtOxHCRagcWyrJSzMaHI","abc13":"HNqMbbraCFVTfNFaSoZVhVVOfarSnGSiCZDVsXgFXSzRFIKwaplIUYMqzuVRFxO","abc14":"srHDzKMGjGYMpJaySNUWqrqQriDYTPptTnplimeqpsMAiguggShdMMhVtwGnmpU","abc15":"uArqGWXOkcuvZRCEaueSxFjgGSqqLcsODuPHXuifLKJDkskCmBPqrQxwkdYdjQf","abc16":"bWTqxnuBWfiEOdOxzzUnsGXywlTLdYXzGAcYIOxZuArvgcGHUCNaFbnRIMqnoRj","abc17":"neoJJYfVNrmnLmpAokoYDFPfbSSNGuxoJYEleYjWfaMYxbbzzQJOmvkHCzMqaNk","abc18":"QbaMXtdKUSDyRpxdloPKbXXdYJjsrCePyiDRaltLhCDboJPwKlqpJPZtCMfvZpe","abc19":"ppxKrgbmpwxioWrJNfXQyFbGMeMcrssPrGlkiflpiALBLxtpTMKoQHUDCOnFxfn","abc20":"gRAYbLGKXUbBVkpDoEDcDsAiKroDcWACAHJHZxHfWEHqpLVxVFSTyWiUUwXdGKo","abc21":"PLdNwYuHpWCJiUSgfGNhBPgtIUWTWDvDcFBTmgJJNtISnqySmyqQiovPWAjdPKS","abc22":"xYcROnKNbMLVlfLdhiRBycGbgdXUnPQByEdwXopFBeLnZnwWOVWCyQdfIrfsIsZ","abc23":"pTLQzLfWvhbRalidTLdUIWHxWbTODvVarMuxEurMjLqvoRCyhQIUHutZpDKGXYi","abc24":"oDVfXwTaruqPDzIewyWzKhNTEYQTSADwmVgBGhnAKKtaIzhZPTvffvpWugAQrEs","abc25":"prUFcWvWnRQrQfavDmGjnoQimoovOCmqwsAyjnMVMRYqGJwpIAGRHGvaVPdREoW","abc26":"eBEKoDltiQTbTivFFCPlqMjoIRmnYTPqqGPRbCarDrsaAHQExzORkYNQnzzzUXK","abc27":"EgsoFQeceqTwjUXgYFkZHrikuwHupnzDIuNkzPraBpLvQnaITVsoEhKytacFMUN","abc28":"aimVBPXLoFXfGLMKoGIZffiotjvZnaMaCOPeUxjvlPcsModKDajKEEpOXNTCUBn","abc29":"fJNyBkGkudHLopLaSxWQrwoNkxegkeGpgdfVPzfHLyFlGBRVYWdYmRNNhTLvXQt","abc30":"hUiwdItadvRoVfQSTDEeKbOAfPiRJbCtUxXxmJNHZyCjEvibvWjUlFbmLQFZLfp","abc31":"meFQsiAcdsSkGJiKrpNSLoSCvTkazGcZINpJEDkikHtZhOXOTczXiQWxPgWYVet","abc32":"pcMPttAhRJvgFTXVjVbiAQHoZRctfIpEboVVBzORujpfvwtubcboUHOlvqCmzQK","abc33":"SeajEtrsuVXghTnvntpOLKFtoXpCuWSGFGGBrjLnwTRmwOeeyaFsyisSkNlHZOo","abc34":"nKhEuiDxYwPBtuafZIOczVXsvwxpBZyxWCaESVPpyKxvKVyGmNZoTBpLlNSWxHW","abc35":"YKtXlNDwLYtuquQmAieyYqqHeqsxZYjkwcaTmJGCJVKRMKodPPiBfbWEbJdGltM","abc36":"kwRhOLnNcNbRqBMrLpmHYAXHAPgoKfLutQNtbUiROXvizZWtmgDdkLELBYGRiYF","abc37":"pFiterDeuwHKgXAavYfZvzteelxVVDRmJaIbEqGNzqNNnitLvQtivvpYBVzgyOd","abc38":"DPrnBWVMyYvSUSYHQuSUnqougmNgNzvhtaeJQFZSJnTwqwMTfhLYmzdGaGTMqcZ","abc39":"RPLUUpxfjlPqPOnMwwfnjzBVBzwWaTQzSHjmvbimbRGQUrEBXXZoMoBhdoBSpCB","abc40":"SNPKhVKQvvZCUiGWaPVlzVsKGCkgVRbdtuCksBvisxrJuBfvAlqMnDymRggCbRU","abc41":"WyRMhOCANSscBcrpVHccjcbPYfxYBIaIxMeAuaDPIDHReUjSDzSsivmJnKDqOSu","abc42":"WCiIGXFBuvbZwYojfhYBjgTOexvQqdNmWGVBaHGhYaBLLhCtfmwccYmFbtlgSDG","abc43":"dsKPrlonQHIgIZFrMWLNEUZVFzfXQWLKHNWuKsqLbTjbZXrXPyQCagTLmkCzubR","abc44":"NJCGSpgFXGTVnnbqkqGQcwQltfpKtpplSHfahnPtPOSYuMpVKMaFdDahLwAjcir","abc45":"NcUnVjSQrfeqqiePdSDaylzgJjhJkQxGTeUdPNaeacyFTXMdjfClqJxzKebKKdL","abc46":"NsGTZmoYZuIxdzmaDtNGSiGIDvrNIzcFHIDhdsJnDvCPgOyiXwDAzsBGnUUJGyZ","abc47":"aZbGVkDaNSLXPxAhNlFuiHCwMtgTHCgQiulgOkeEfevxaJikXkIyCDBoQokEPhx","abc48":"gOfRVzvYqydKTjNAfPMSUVVTrAVAupElBtfMVPgSApvVcOiquiPZRAJOlLkxsFo","abc49":"UYBvvPNthmzxRZpCqJuBWdnkPxmZFxNKaMbzsYkUSzRzwUjeTBSkcmbbgEMFAUf","abc50":"mHGvXVYvlmWNIjRrjzNQSOgURqMFartRpsdZtPwZHIXjcmEHDnQjAhlctXbnyVB","abc51":"RqcwfAwkdJUromfhjFwqResCJhAuiMcSXNoEELwGGbWcpYSgorbDVUysCNVaeVJ","abc52":"NldiCrxkKTjcJGvjMhtFhXsINtonuqbLPKZdKdizCmZnkPNjhQtLKXUwgNJVxqg","abc53":"erwEwAzyfZysXNYuysPmLGCeaRjGwZfHPqAhjGvFPIieejfsKgsDlUToxnAfWBa","abc54":"JvdoSuioxsbWaGkSSISXhMtqrmlztfRcFIoOdSwcPYwgqLqYneKHzSDDACLRfhn","abc55":"gznhcRNzGBDCvCbtyhOvzSaRQPidJglDpnfoeBlUdsTMhZmMSFRafaTYgxYBlWX","abc56":"LJjrToMROTtpcutznulkavEgXakjtXDtmXGrKaRetKvAsLzPfAZNFOioLNJAOoS","abc57":"kWLeZqEESxaaXejYqOJAkHWywgZsywOsmYXpvsEEVdpVCXnFoQBkHtSGeoBTtYp","abc58":"cIkYboEBeyLOlrFpAbQcmIdToEWqqlWHMBqqXthoKPbFrwQNbWMUpaMdsCRBkzz","abc59":"zPhxKMsgipvwfzRSojiEkwuXaeBcACpDevQPtPIjZhUUyJtmstzQewxOGoAapLB","abc60":"TFczuRYDfLFQGdfdcAIAlpoqQZCaBtHOkJdZgjcebKxSJXwsukHCeFwdwqTCSDQ","abc61":"uOZlhGQBtikLuCVYWlSJMePqDRSCwrNcaXQdHqpzXntAiFZKZfodgboScXEdETR","abc62":"xWdhvJACPxjyycyAyDhvhRFYSsqQWkowgBYlIsPionmisNcFCAQsnvmSBMyHxAX","abc63":"lJplEaIMAzOsWshXSYXxnZDcoreeWPFVWUNLSztythmvJLwhGlMVKyFVdOAEPkZ","abc64":"nSffBYUSfHyLLfiZiEKLyLYEeNaByZnKKLkQslITqGndjepFZMJybzWcHXyiRls","abc65":"DAChpWivtYPFCcVflRyYfqQQaJfIGEdWtNgFWureFaTEWuutNVxJQOqrWydFxXt","abc66":"nddvWjcuaBIJssjenIAieHMUWbfMEMSRIqfcsjNIhyEUUgHpMNjhQkJdsXdaKup","abc67":"rSAQqJUqTtWucMnuJAcDTctQhFFCOmdzMwWshLxfynMekZnITzQBmiOUwUQnZIl","abc68":"zOOLrRxJEHUMTidCKRNblsjjrrQYIstwaCeexlxNhIyTTPpEGYAxzKWmJXBDQdD","abc69":"JvtNRlFECsJpqrfIeWIPYHBMKCzXbrvpEMRUrQEdzuObWZFNNKEwVhWLAeNUfIm","abc70":"wzLSheXYXohuvtnXdHvcWVXdyMdJxfAPDteJaaGMdFMvyVmbAtSXKAUCVOtuKqs","abc71":"TdGExXmQvgjfwbzljQpdTrABNmcixXkWdgGeKrFTxOqQWlsPkTXZBnMVultDTYu","abc72":"BRDQgbfEJbuEpsaYuznqRBvHtCewQyCQaTvQXYcVBtmVwnFdHMiFQxKIwpVQzdq","abc73":"moCdYkKwNmCrBqkvCuvdyNGMHQsRkpaHVjFLlhnsiyCFAEgWIPLBzCsWHZdzfXi","abc74":"yVCvyYmdIRMJUFkGASfkCqcPdYJUPrxUWGVsyuSGhTnaxzrgUXvcutkNNXKGVUi","abc75":"pFzXsPjOFNqPommsOLtjUyMOcSumXZqJGAbftSVxNgTvAwEWEwsJpBEBrpPaWpZ","abc76":"InttLAopyfRYFeRMJNlRuCqCwhRQoemCVQRsUlRYaWDthNUylpQRyruAfncXBHr","abc77":"CPcAZjbLkKaxuRRwzMKYVhGipghGsQdfMxBDtInSMLqQLpJdjTupUXBGMdkklBp","abc78":"dKJyhVXrzzCfzHXCSYmZYuNhwHUsPWrbbfBvSgxewHlypBxkToLBOsXxEGRcLzn","abc79":"uOrbNBRhBlhIXdSmPGDkxHqAKcwKWDbZWEBpyhfOihGqdOPRQgqrdLStvJqafSB","abc80":"KWBoNfAfMZUmVnzHYULMEEDsjSPTMHiCazQdZfnKHLttFZwIpvycQXXKvHQfcpy","abc81":"dzwDjQdFISlvsHTFloFPseXhxHKXguFMWJMzYoEHGoGAZJgpyYPBTROrdvCJKDR","abc82":"qdQQMuGzuVTGUGoWJlKzOKrBXifnoZIIrjSSCsLrPoPcbMtvezSjiVzIoZjQeyF","abc83":"qSXEpFgybJCjNoKSFLpTtuKPWgpdUcKZOwKIRdLCdDZsAepMHNuatqaSQcgTBqt","abc84":"eUCvWBJhTfihYDMkJBuNEHfUegZnyDpKBdOEnoQbYFwuyPPqeknqlVCgnxkGsAR","abc85":"IrkQYWrvUmbwDABHToPkNPntAWkOaepalOVXPeQsJPVuZOiTIjOLfWopgSaWitd","abc86":"jCZSQeauAaQmkRtBEevKYHZnRVOgtqPKGFOXIRNFMjkOYnwiWplluNgogxhKOPk","abc87":"VLsnLsKLCYSgmRlztDZOOSlUnVITqWUUGvkvNfnAvtrTcMIzflaoWqgyUWSGYmK","abc88":"ImHOuIIEqIEsvIGxOJdNCzBSjkFUPgRdsccgMDfJATrxmSkFqkUlaXPKrHJkyco","abc89":"ziIxnWpPWpZrZheODnhHiMcMxYfAiOgeGrbNjIKxQquncOcsouSUwbGoFgsUran","abc90":"mcIgKiSIFdimdWUqEvZLRasWOCMBLbuSSzEeiEZVlvVgEzlkTLmBQSjVkxEjdKL","abc91":"jxYbDgLVRpOMmyQIrQeQWRplIJDIBxPKCIOQWxOvLomkbaMIgsenyRyTpDHRDGO","abc92":"yLhPTqSdIJBRScijmhzOsjpVhzfofRBumYVRRlaJpJtuHonuzfJnbeLWajBVJDq","abc93":"RWbrPGFKxmqrGFolWHnRgKlxLZPAwvMbPhqGXMjuAiHzLqzSUnbTbEuSzNTKHXc","abc94":"lOTOlUptmfZMzRzrSvycHLwPpeKWoPwdZMtUoIvYpaCqzcreYOUXiwsDfGfCnte","abc95":"dtpPXhRXYeXJPjxwYrBoKNsNdapmZdEBocUmJyXkuLukZMilBrBSgsXYbENoDIe","abc96":"lwjRdqtHVduybrMOanxslyfwQZbzjOTIzSkYpReWrRyMWttXwZSaTPyCCtIPIRq","abc97":"lJvJSuQKQyHdjSMtTrlJdtIQUalcTXLLkOhoggBDiSHaCnbYXWUhQWaKutiXbLP","abc98":"sIypeCGLfVYHqwPxfkmEJzExwvdwEWPPACrSoiSDLsoEUPlTzYqSiSynYLInbeu","abc99":"bmZsXDKUzDXnBopnhHnHvqpoyOSCZndvKiVfVXUfpdgWjtNWpXShCAKlWONboPM"}




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