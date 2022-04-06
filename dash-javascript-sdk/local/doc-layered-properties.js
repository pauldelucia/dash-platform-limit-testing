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
      contractId: '3KaPzWwNEA9TLboD8TLixzaUEmxDxC4CudGRAhfNcMwT',
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

  const docProperties = {"abc0":{"abc0":{"abc0":{"abc0":"zCLvxPCvDjtuKraLChfieuNFIQstYCZmhsfZXNEydLKRlVhewyDyKamOywjBdQm","abc1":"ZEsQhZuUdDBtusdeijJMQDZKQnCjsmLMRxvzvcOYhkpFRrGSgBcjgXVmYNYULWV","abc2":"xgEeNePAtLNXCkdEPbngiqXPknhKwNBZlWcZtfQIktOszHiyCzHwdStMmiCyBBI"},"abc1":{"abc0":"pOilUTVKueHFTQEkgkAcZbWwuSGKNWYjoCiRPlKOuNAFfraTGdwNLmOXPtOAuOq","abc1":"ocWEqVgczxexoSHiKFbuSJqfUtUNJzADmlfejcpKftbrJkbxWAGyCpqPflxtnSo","abc2":"plGprVhIGuMvdbyckUcxfrywMbgLcAAIpnwxMPAJbUjeRhvbxmelfuQCviKMJFO"},"abc2":{"abc0":"IAEqHDOADHgWMkFOCLNXMNfaPaEpJcZyeNxGImEVNRolmBQTBkiFjELbFzmnWCy","abc1":"xKOoRoQgkidBMtmQCOTUifeIVLVPhzuknafNimmxmRitUrBaPhnNvKrrILFPgqm","abc2":"qDtKoZQRjBvWxABYqtBTaXywYaDrtdUHffNtjuSeSxkZRUkKbxDjPqbhtlfvyhe"}},"abc1":{"abc0":{"abc0":"SZgRqkOhWCDHkYtzcoaVauRLsNyfKXeVqiVtXOAmgQQOYZEeWsKkJHbloQBElbs","abc1":"puSOpdYCuOdrSmAbYEdaKfFwLDpBpwkMQHAHBhhmVeZYXnMoqUZvhbWYlbExjZL","abc2":"PsXgxMlPCGGQXYRjtiZFEKtQciGmHEpedqnUITyBUipqHfmWTqJwzEuqkfnXGXU"},"abc1":{"abc0":"tFjrjydoynASMCdhtDDLuwZFTBvIeuZrrxQuVkFgWwDaoLCZeRZFNqYKbivvUnV","abc1":"HWSjZAkCEdyHFvBceriESEQXJFlvpTuqYQoaiJyGUikluXiEvRDjPBhIOMUFJpi","abc2":"clFnbbsOlonYrNDsKBGCxDftIIZmicFxsCklHTqmynBdNUbxscBWYaXBNZbGFjL"},"abc2":{"abc0":"NUctUAkHkBdwWlUrbLkNVYYAoFWgnPIdabnskpgPxTeIyMkFDfqPojYYFLxqHzD","abc1":"tncnbKVlbSRHqcPFopvLqHSKffzwVRJpIqiaDWUYWmUoUxQaMdwgQMAHCpotfKq","abc2":"byfSUhWtaBbKAKQCpaexwXCntCRJqfEHwmZAqMiGqdKngvwnFexGMsgiARGukmm"}},"abc2":{"abc0":{"abc0":"TWkpkJyqGRKqRpBimIONiHktDWPSYJlLARAudfcuwmcNsakyYajXnZhCXSZUCES","abc1":"KIuPrREcpRxEIycZrUXtBfZVeFZZHoWnMwjPNoPVRfCzUhpueOwYNONwPILeYRE","abc2":"kBRAEiPFVIxgJygzUtyqeKrIFovVNIXyNLhocnJlMeHDuJayGMkeIJRWyoPBiUJ"},"abc1":{"abc0":"fBznFPIarnHEyfwVizBwHIEQXoyMQmqjmwQgTNrayfaLYDKpipyKcXevxCqXdsD","abc1":"cieDQAyKghjtTomMYiEKOIcubdtdLjeLYBhEYANrnEabyffEwALjdmSibRbxJGP","abc2":"mfgNXQljdsOCmkYzZnJGqFSkrIchPsPUhOwOwpTcDFnpKEWkbblnYxwrLuChLRN"},"abc2":{"abc0":"mWiTOSeuKXrhHqXruYALWtjaohdyweHPAYnseChsxAFYeimVnTwUwDalYAAtVxz","abc1":"aFktRMVWTWFWCjLideVhdfKmgwzETHmWpoqSZYqqEokZCJWVwmyQCMIOugVLKqA","abc2":"PmXonjAIDuaNJGKhhIhjHzweAvgtRUoKpahGXfPRGrsobuqbnPWsAPUFjrpSVFW"}}},"abc1":{"abc0":{"abc0":{"abc0":"CmnXwyUTAJPrTEMUmVDYJGEkycIdmDZotFumUAIhNWHSfGNOKgiNpYYCtgOmjXJ","abc1":"YNXLjQLtfMpzPGuanbpwFjwQmkYHvNFdRycaYpwxtjhKEeHngXYlnGeghBYPjNP","abc2":"PTtTwVtReyecfYAPjqNiznLTSqoczMgsoJiHSupUzGoisoHMYqWrVvYLHmDnZYG"},"abc1":{"abc0":"bdOtPgTVJJAjznWLyqetumzqWKFaIJXlrlokwxzNvyieXSKQOfwlGXrneAyVvGT","abc1":"SimgtOGFFAxtJyeZttqSSwgtLKUUWwiNAPfOPEprrgEWynePjOdvedbLFJPxXEF","abc2":"uuYqOhHGTUxZMYDEOmxarYGEyPMvaaUvFSsGwkEOHZOpDWUeAnncAfxeyBvIhDp"},"abc2":{"abc0":"tdZQobgTLcJIXzgUlhhnWzLxTMCtXsFEeojQGiVPqQNBTmIzGPsbQtudlyAUScs","abc1":"KjJorUPetyUvJVYRbhOJWqPDkWgWasrvPefAzGCGSXIrNVDYmCRaswkrilKYkKR","abc2":"UntlbaPSLDDwCvCOTUGxTaodFuCARXbnXFIFtHhnfwOWOzvTLKxEsLSGBjJlCMo"}},"abc1":{"abc0":{"abc0":"rZDmgsaNgocBqOUeaWYaPpOQYLbEeotXXHKLZEfQbUuwgZSuCkKJmQhcABEVZBY","abc1":"ztuvtUHjjGncLzohHZQgYIuoZShBeWcnyYGOZZYtBVVFeCRbVLQXIWDFEXXnXix","abc2":"OaJZuZbYPMmeBFLdcaovZwoZQbQyaiFTMTZVaSidPlghHLmHPFHgIRQvcckcOcc"},"abc1":{"abc0":"aXQkjbXPrwetHKdvHjQnhicKRDSwnjrmueivclDbvuRFcjTqxyDLFMQZBGZGJpA","abc1":"MonNJsCWLRLLAJEkXEIjzubJwbdnfgpFzmBunLQYuGRnUnevzhHmGArDNmgbkyy","abc2":"KLCbPeafORZBSNCTVoNfHDeboFvzUQFbYUJPWhtEbhzIbtRAHzQoFtsAftPSavT"},"abc2":{"abc0":"shGEHnMPtgkFoQCNiyXwdiCtyXRKeyjmcPxZbHpsKamaFGBQmoZOCUYdUnCshxQ","abc1":"jyZuSCcddvaWkzzGdTfuekvhUBNrugntUZkYKEGpsXWwjChiNzcWiDbLpXvPSNT","abc2":"SdSjBenmUriBfbZmkaOJXwxrhoxXiDhnNrWTmhOLsZpnaZFqlozUlzWZeXaGaYq"}},"abc2":{"abc0":{"abc0":"FYEtDNeDgmdvMIvxpyogfbIhNzNjLyFXiFVYBdUIkzNTWUkrlAJhLeRcmRxYyDn","abc1":"mttkdeYPybhAzaqscLqzwtykMHTFlXnBjpXXuGaeWPOEOIMUNYXbYlHCfodoIwl","abc2":"yTpyrjtcoFoPEizekXRAnxoFVsQgNrIqRybFqlwqTdbtoUwrjrvSvazCvtmFPqC"},"abc1":{"abc0":"LIVbcTsabbkNALEtbZkBVrEnsUOMqkwOOtKrVbpoVksnvlSkrSdMAbysiMSoMLt","abc1":"xjvnqVPbxKIbTcQFYhfIhmddqIAhwBggnvfBxfidafyEjlYSeGHmOetxdKRBdoV","abc2":"FBbglNVUektXNTHCSOBctqaQWFKSUQjdmxcCWELvFEiDxgHYkiSFqKeBuxbTUSt"},"abc2":{"abc0":"bpsJSDRetDMYMIpbelxdcRJvwlGGtkkmkzSodzQkdkBbtmLVMWpaaaDtkfIvxAc","abc1":"mVGDbczvpQkenLwMkObZvpbbMWuwlOXLElpOytEfzeJVpUGvHaJciorKjiGAykw","abc2":"UsewYMjuHhRMpLqlChonFiyuZodcuOtxZEGLlzyhxsrYdqPeoIUeiOegpvhpvdK"}}},"abc2":{"abc0":{"abc0":{"abc0":"LiGhyytTfwXJAVTyaJslftyvEaPDSNBEgiveOXKpmKVoirKzTZwZnTCmkBSCTPz","abc1":"pKIjPTcvKTzJjSPRRcPVIDeCoeuTZfeSnnmijTvzUSqjPaVScehdBzrrAcJfAXn","abc2":"KCojDdycRFbgKleYdIVOZTImWHIrMPxowOChOBNDKerTXvoeVAhIyAPhuTFOiKM"},"abc1":{"abc0":"ydLLJIYgmUqObMpQMaqwqqQAKJmPgidJNUOvLqeMXwyItZznWdtrRCeBjabwtdP","abc1":"LQxXnFjTRdpdNnyTStwXbZMWacGKdLGROYbzcjHwtfgbwXTryMdBprjlrBySIOE","abc2":"aHnGHTspTAZrNtuRojpOJSCEvEzBTUTZsSnVsxlThBUnpTzlSshhxwNHkvHcBZb"},"abc2":{"abc0":"tTeGmrZPXTMDUAaIZcoYLhRKIGzAKadIXgtKsNVEypDkBFNQNUZgxJnqBGCieLO","abc1":"MSZXeMGLDUJGMifbAKMJiarYJmQcyGVXOsvFMnQGdIBKsNobqankclhonTyhldr","abc2":"emwapKsRzafPeCyXTDpGAfGSLMglIrCvPihoXBvAghEIyiMYNWQplWqCniHvEOd"}},"abc1":{"abc0":{"abc0":"zOdgskUMIYLYJeCgpMsYfcmbxLADGSiGrgLBXlPkpFRqTNDIAhjMboqBoHsnujy","abc1":"nmtEVEThPqWMxSlZcjZdMHuLacaMfbJcnfcKcyboYuDEuXBCtIyROGRGCvfVblA","abc2":"QPVBjicFzONranBreVbTqOtOSKDObHSzvYnFeNAvuaikbmnzYVJHoZJYvGcWZQl"},"abc1":{"abc0":"LmpcDCkUYadaRsZfByrdSzbACDYLfsqbkQiGjhpfIqlCleGUVXERuckzhQJdLwV","abc1":"bwKlgdXyVSUGibgFYhdKCTjhBHxFncrZjfPTzheixCmrZDDcBuFQUZRGXRxruYX","abc2":"sixGkqdtOFfwJdqzISvLRbeKxESvhRjTnGcQaLeqNyyCBrQPqOTUkBTmufIcTzV"},"abc2":{"abc0":"lMSdhNUzLtmjgVDIgGKECZDUePmrjxYqEnHiitqdXBPzzNfVgoacbXHsUrtwfgV","abc1":"VwuTSkaqMOBRlmLMsKniaAGSogEcpPShZzHMIMkOWmrXaktHxfcPURKrhOMuljy","abc2":"qTtyvQFtdBkEbOXYGsWKuXTioaFHKlfEWcRVbfadOAofxxMRDVMPrEDfkrywZXN"}},"abc2":{"abc0":{"abc0":"hCEeEaWUBSQRsWpHphLKIxUtimzJcXqKyhxMRHMFXcjhgHCfJxpBbmYbhlLtqlb","abc1":"tJQYJBCcAYKobcAVUyxkeYZuAnCKXlHuykxlvfhkXjxrohXsmNDPvlvBwoUtjqd","abc2":"FRoJwZwsJsvoUBMjiDHYoZDJQNwndKrqXttDHbUbgdRpsUalWeSjfxluVVvXSTp"},"abc1":{"abc0":"GwBsIQmfPMsnqzzreBCmMReYbSaFSfKOiFARNqdSIwZFFQvfkyMfkeHyUOazADw","abc1":"mzhafDZKbtPpBvnKBcodSJxRGqunLIDyUgwdEcoDBWFUgumHuvQcjGslqGEkQtl","abc2":"vpoyckRmhkSSuBIQaCTLimbotTFrCCKgUbTEpGMSLyAgkyPoVVwytVJfpbqqHvg"},"abc2":{"abc0":"WLMWIZzNzTlKBxPjuGWMFtupxfgGAPJMbDYSjnrBGvXbKFPiRstLlQXWymMeoRx","abc1":"LwtSvjsWRRFozhKBWjztJyEHKlBXSXgngTROliVzIkwCVDYxIIHpmNtygeQYMwp","abc2":"INszNbsRrwpkAtDDmmPQpQCGZVgTZOQtykvueKkpOzwrqoFposlSNwHkNfCXnHH"}}}}




  // Create the note document
  const noteDocument = await platform.documents.create(
    'tutorialContract.abc0',
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