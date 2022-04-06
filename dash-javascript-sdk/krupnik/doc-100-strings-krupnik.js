const Dash = require('dash');

const clientOpts = {
  seeds: ['34.210.237.116'],
  network: 'devnet',
  wallet: {
    mnemonic: 'science loop faculty paper flight turn window tornado warm rebel muffin seat',
    unsafeOptions: {
      skipSynchronizationBeforeHeight: 0, // only sync from mid-2021
    },
  },
  apps: {
    tutorialContract: {
      contractId: 'ETqAYJrrdX2uv97SFTc14thXDXBDLHD2M47afpqeXAiT',
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

  const docProperties = {"abc0":"SmsAwLdsIGIUHbPqDMCZGhlZEkwwiykJNWgywEVGPkPMhyxSEAsdGjoPGgLfQJt","abc1":"olTKKLTNDmXkuwozUzsTEiypjGQAEuvhRewsFmNyuBACodOWPaMtAknwcAKCDPy","abc2":"ZMLbZXUsRJKfYLuXqYBHIYjGdaxIpGilSDWbpGKRdKfQRlUBbwOadcWuabBqjoW","abc3":"aYYqGIcrBHvDOLwPctSEEpVJFGSuWweijfrxhmzkBsplZuOjGamAMaqZdUITGuI","abc4":"JkIjhvZantyKVeqxdAUxTWGGAumIewAGIRHvtSZKdbdRoKjoWzXpIlpyYJbSiEE","abc5":"fNMhNFCUnXALtsIhRWfyzTkXwbRfWHoRJXWIBxPRFVHfogCPRAFOHSMqvsqNGdX","abc6":"tRBUghHoLXBzMXLITwrjoFCPbmMjtyEQdwEAHTxPVdBPRslfcuYOxlWtXtUZaMA","abc7":"SBqZnpozLxPVGliOWNMzexcpSTcoDyCeipuZMQgdDXGwoULTQvpXaRnuKBlCwAg","abc8":"aNqawnwWBlbfNfEItvhJSaCHLzNCMxHeAHizphwoPzIgCHElGaISmMsBIdFuFTF","abc9":"pKGbYlIPfjoXtfWbvyFGQFrhOCZCYWlDZfaKCVglNVPpzGnhEVvERBkdOBKDgWG","abc10":"VFfJBoCYNlBonHDkwcycnCvNtWptiysBFauwqLTBKavaXRrZZhyKBslFqRIKgRn","abc11":"rxlCVkNlFsEqEPsnHBjTJRmVUCewWukWrLgHLtLFKBntvwiGxkpwMHOepGQGFNT","abc12":"QaOZcVlXBnYawHjQEWuJPjKOLiheTXBJZjzIsQJSTGCMxHphNOldQvkLPoKPdck","abc13":"NjDdninnNIkgcYrorseqmjNjtNBGaDPwQYqFzErEFzHgoIRJgwoRWGWiClLQeGZ","abc14":"UtArQHIEhBBRUUQlRjEnvuExLnTcLGVHYDFETmjcqHjaIkjRLAfaWRqkOtkFTfN","abc15":"hkZXhCwcIjtVBVXrRFWLRIBnYfdJnVVKfbqtaeaHfHZrVUESQbDtWwncATYJUZK","abc16":"HpetCVJXOTEtxBjyVLZiWUaDDDDhjhwlwFyejlHRRMYxwgeSLqQgmCKrzNwikkl","abc17":"hVlMTJgwXNokfxmUbzQWmyJcbKphrLvoBXFJBfpoQMiNRMSzmuvJgDCmZudXeZs","abc18":"JMErWOlLTOMfCUsLZcnrMgqNpaNpiIUbeOIjckZuVgUiGYDMFWaJobLiuMXUNIp","abc19":"ENcDAJSaZbizvVxyQoHMOhjudARQdKIWkjOrTeQkniVPzBSmnkcHIvfIRFVmOqf","abc20":"TdGIdAqIthBPHfafAmZhncSdGtwwPbbVOPMRKDRdZOQhBUPkfKSdREXczpxrLNR","abc21":"VbVLPWmxEVnimmOQqdHuBELYkYsLnZhNybqIZxucKFjMPQHPtIbsHOBbMKFUZKn","abc22":"dzLYauhatoeWJPuatIBPYciFaxpXEpQJUMlYkFJztKHoNKSSRFItEGcIyVFDeHL","abc23":"mOVfNYFLAmBQtmTuntCoCgCqYlkeGBgNtIaxussQlxMVyvSaZvdfvGCQJhvYsOj","abc24":"CXySyJaabeywrxvxnFylSjOQiRHFjmGhgsGNvHFRJNrNmBuucgFuSpsWElXdLVb","abc25":"nVzxquZMHoTMIcOJaheAqUqXaFhVSqaIIHpfLuxJVTpINznmooFxDNVcMUDPGjS","abc26":"HJUHKuvfIQhgJySheYJIgMqFnoHPAVxeLQslVLsgHPzrrVrPkWiNsUvgwnkiTjv","abc27":"MzdADTnHDkcWrOcSTvtmNGLPyTnhaQvvTfOXrSYReHgKPMSsHAMNJCTRarswUNP","abc28":"HUtvthCiHcVqxBLyRGVWIOqMWMVtdThZcfRzeyonmCULVcOXzTdjxvNWTcLTlso","abc29":"qFChoxcnSfmxCkxVaLtVKcnIZtEDEMnwuhFSfFbDLbNKAonArMqQAilCPNoKuJg","abc30":"OdwvRHbXVWDiIyVCzQQGuPVAgTawdUDuLNtPsHwrjkJJQFinlTgHfJbeRoABrWP","abc31":"bsrsmgKOgipAWRMPmSUpMZbQkSAflXCPkvLQYnBiKQlFOFHAcOttOGVsskEWYqc","abc32":"uhdpAetgxeNqXHSmPxUZKUfrbCtlEJMxyeHkLpTycMxYflleGpLPuTmlFEfFuhe","abc33":"FRSNgReIJCtdzvEERmdxjGEDLZvNaOHeBOoGuQCgGLSLFanpXAjhgvWEIgsgGdO","abc34":"qVobtBevyVEEoLbpVnwuMFlTsETpigCmvVAXqLgkfradxnbncjhxQGGLaEJVCfF","abc35":"dIDoWOiQBWiQnAaPNJzlKsxXSdKZruquPPEDrCjPiPczrFuLzEjcRwhvHcpjUOa","abc36":"sFOxNEvugGloJXtLRjbbBPAabHVvUZvbUZEosLdOHeFUnxUHKfxwVDiRrGljmrl","abc37":"ZQpRyJsnsokErJqHqBIgmMVPvqWxkcWFxIMtoORMTLhpesfPpLgFJuFQfknOwqb","abc38":"TqvLlHjVqCViCEJGXIXwdsOvFRPVDdurrqSPDKUBDvCmUUeaTnqeaRXgNrADZIx","abc39":"oymZWXjbsEFqarksqwYebsaWWqdTndPNaLDZzWQNoYPUsDELJeGVIEvxAHVAnxl","abc40":"hLBdFPtZqEOQqqpAMryieQjNRshUFRLHPxgxhlNJKNUoTopGwBWAOSWdhydGOVX","abc41":"IZjKFQnaCvDixZEZzVdbdVIrwyiQqWkkEHxdeVmtGxmbNiTRLDnmOdoZvtdXylm","abc42":"pkNDLJuIeLRvukIwRZnHelegkWpDfJNDMoDUYFSQZSvuyjHxrEUfxmZyLwQPTEU","abc43":"EkfMVVQZObPCqqNOBqSlSWUxgHFbLhBqLwzIHSQZlRrHBkjRHNySVMAdMBEuOlt","abc44":"iCJZKZewfAAPOttfALOyVgbYidesbpnPJQhkdycxeMywizByvClVehNglZyRLoD","abc45":"OFHaBFjRQUEANdnMouwHkUmQPadNbFIzOVnzYYPAGzJzQLtyTdgwTfFQfBFVltx","abc46":"UoNJYPgEFPgmxqjhWXLpgIIxiNATgxOfebMBslhMpRbWeaPBLnVMMQNzUgnjTdG","abc47":"NRdvKefmWXBpAWJcthPPKTPxkStutoYEbulepISZqwnhTBlDKnOZhIzNetGXper","abc48":"yliXiWKwTlqevJopIfJSwstLgdCYwwVLQtsCDNSkBhibJVsLolZICymEqIfqXBP","abc49":"VyaOstUffylfUQscdUODJVqJzkSJKQzHSpshYekrYWQlqGPDCYVyuljBJwAQScU","abc50":"CVXZmSofeGpDzXOOszxEqFSWhNkIEAeUScEkBxJtklLfMUwfzdIRwUEEYfiHzqp","abc51":"MxaxYoZjrNYpcAnrKwzFKoVTNdwihAQDCIhPONHAllnwJYRZHYLfHJxrgtgjyhq","abc52":"jSYAEPRGmRoqQszZdYGxgrqKFQChjcHLSWQxecCsHElonviFlwUSsbMTAPckYYV","abc53":"AokTnrFZpktDcvCeVxfXkEMLbLniXjvryNPPCyOPzbMYwbSZetXYSxfRQknFolD","abc54":"opUMieFoWwajJGvfOXxBgCFdDnwqaAxeHmvbcnOvbsFILaYFamQaEWAUNNkVCOz","abc55":"VMWtfZjttRIPpOllSGxacMcrMHUudaWyFGIOunBIGpturkCqgXujrqdpoQxcvvM","abc56":"hyKAfUkCPjKffAlgHOuNMVWQEZYXClcSLxynryOyHXzEJtxBfobLqFTLwYdEJrK","abc57":"ZDgWDamfCuQlWbpSYZcJalJOiLsTOHmDMEMrEraoasZCsKWoyKVKUbLIIDckCgC","abc58":"JBZwHzJQACMDRwYoXBrsCCmISQiBdsYcqubPRxspZpuPRPwdAJmCIKBtaXejOov","abc59":"EGkUVmwhUrhoGlHZvTZRAOeMOJCwjIzNaeWusoDFdtBlYqvVucMuBwMnboNgrKL","abc60":"erZWcRWOggICPSvugUdCEBYqKSBUgvIgobdZnHwspHRidWYrcXkMNkhKkoyVFco","abc61":"FnfXGVTYuImDzfpidbRsryAACUuWpmCQRAVWGerIqbswuQVzItQzZXYPJqKgODr","abc62":"UjCabDLQVigYjPvFNkDtfIHhiegGkIWwMJumoFXowklbZjHfbjttMEcfYqpTsLc","abc63":"sTpyWekJqdrCdcEMuLFLcAXMBimIQNthjfQGAjNdBmmozkODmaTbfHRVoMCcKXe","abc64":"CGsSbshyRPubjmXtNYkqHiFftJACPfqzVMfWTLHzEvzxHbVJxkUqngzSWGtNzUb","abc65":"LSPzaUiuzaxpDjiLkStcqtFqQAwXXWidvedSAniBjgdODkObMBSmEvHhRhLgzSp","abc66":"jxTwjBQdrsrtuYvpVwTSINapSVaaqlTmBQjaDohPEneLuiGVMfjgkhTpHzqWMiy","abc67":"qWjNEctTDCAXoXsqLcGnXirNFPzITxLMOpTTYITqLxxDmvtRyRUdorqjwvNsaBT","abc68":"HBZGogzNqxHKzLNujmVABKxQXshonQmLHKRwFqLwnMIUbhicYoSZKxWkpVmNktV","abc69":"uNtUAyEjznGLWpmqfRbmeYChmdHjzYSViqaazHJHhoUmMiSrKsHIVFRpJsdruLT","abc70":"mryKWkulCVIwhWlOlWPKxiBJygjAbMCvSpTxINZbuSgrJVQyoQbyZRGhNvqzHVo","abc71":"PylsOmOuidrchOZTfuJPFvukujjgEMiPPrmzDRAadychylgtXZSHDWZacJnRLVT","abc72":"sTDEsObsrDMxnZXwBWcioxxBsQHtSXtPvdgdfiEWKeeGFtuUxgNfwTpCaWFmDdS","abc73":"iWajPdGQxYyMlUrYuuBWRfDScwCZTAeBlgglLwgBrpcwYeSVFtKzYRXRazdgFNO","abc74":"BytdjdUKICLYGNInUlFnqYaywRDpLcNsdVzlcjRzSMzHOwRXuQTosdWFdPpSzrG","abc75":"lONqhswvVGJVwxGblwXKdNayhefhIUBQoaoiXFNBBhEdurUAVhTHYclpqqQrmeA","abc76":"pyFtpbEgOOWqEdFMJcXHCKmsXeccLpFrKoSTaGithrmIsYGqWnpIAEzRorIslOm","abc77":"udxUfhbXwLqkFBYLcTgYGERcDbOtaXMTlhJtdOsuKTsuoBElnMlzgwGZCnjSJvM","abc78":"pupIMPklPAIIBlathThFpWOrLSRyEhVYFwVjFTukqLBuJRANLXfWtnnACmcDxwt","abc79":"yaBXOTvQXLfUZULiZXZiLeGzglmQVUlnNwwHrQkxuqvdTwZoXzxpwGhImfUqluf","abc80":"TcTEHJwvsQjiOCilkvZIDuJjKrecTgMVifaapsEtMAlFUrEKTeGOVDzyDdiyVib","abc81":"pzrvrsaaunsAIHxomBOZLJbEryOhAvEHRVuXPVvURPzIbNPziGDgSiEHWVnqkib","abc82":"hhmHGdzpkWFJFYohpPxdqnxupSmuUmZCWFvokWCcKcePUsZqAItPtOstnxJLceU","abc83":"lLmZlkykwDNpaMmwWGVSWGEqZFFKyyjZcqryRzFTsiMyOLrqTEJxANvpZdiBiQa","abc84":"wrXzBnzppNiAkdgCjtIMeoWxaawuInoJLmuxcMiiVdyHAosLpLDqvDhOjERXcbb","abc85":"ANMdRAhbBrRrSQYjdIJIeRSvfQRTMCnaoRIkHKgNVuxuSJmTsAdFceDgZBJjlHf","abc86":"AeSlGfAKZddbCxzQgiQZLjnqwuwWfQQQvCWWSuYzMmThJBBIUFfXVTZIUGblnbD","abc87":"ouHuhNnnLwChJhhODYeWKEfbiztzLovdXzckRhgdeYnwABtjPuzFZwOCkVxwBex","abc88":"AqAeYhepacrGNhtbFBamGWexUezImMKGsEOwuuHDcpmHAnFAxeUjjhpiNqAojSK","abc89":"DlEiNjrevDkHFdAuhLpHKpXVGlcvxibhKEtRzrmVWvNExZNqedeIvvsTyEuqIOL","abc90":"ZYMhFWSXOgGeQeaIgLOprViRDUMwFAirdEghtjEwBBbDhvGfJByuCVHQPhKrnSR","abc91":"ByyMNNqolxPcEZLivtAyRXGPedFOgpmhTgrVypPynxncxGUoGiiGHJcfsmvvDJT","abc92":"ymQcIZUoSaVYaMlpUznlqRafNWcbFyukOlzUzoKtgGAYqMwUhHWhUhuHUllYFUx","abc93":"EszOPRulryovbjZxiRKSVlSxBanHusLOHHCzsdSSuXcIRohyrDPBXJCftBgnZlQ","abc94":"BmEZjZaNYEFLTKwTFsXtsrdtUMNPGBsNUNTkNMrYxmqjPlOHOwOOTrXlJeipuMb","abc95":"icQASJXoGXrhsdUPkXPZIhVoPABJgwxuYbopcyLbFuGhuWcxvRjjoeZxCFJtCNQ","abc96":"mWPcLlySIOZsHyxppkCyXgSLDkLUnfrkuUizyuSgjjumymMyGthDvYMYGBtXeQl","abc97":"eTTZKooOBhJCrmtjchjKHtapaflNmyjutTEckKOTEFRlOynOsYwdzlbFhCbKtbb","abc98":"XyXCtCnicihcEZUjrGEXkvECZymvJUWzJlEjCpGAirsIPcfcWOpAcQZILJenMFs","abc99":"qJlcLkdtBpSanvscTXnZFdTsufniGKrouRbbdEcjntvFWQHBlEcvMwHhdqnmDPV"}




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