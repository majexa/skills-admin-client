Ngn.ChallengeDialog = new Class({
  Extends: Ngn.Dialog.RequestForm.Json,
  options: {
    // @requiresBefore m/js/formTmpl/challenge.js
    formTmpl: Ngn.formTmpl.challenge,
    url: serverUrl + '/api/v1/challenge'
  }
});
