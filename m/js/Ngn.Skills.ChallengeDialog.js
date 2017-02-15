Ngn.Skills.ChallengeDialog = new Class({
  Extends: Ngn.Dialog.RequestForm.Json,
  Implements: [Ngn.Dialog.RequestForm.Json.NoStartupRequest],
  options: {
    // @requiresBefore m/js/formTmpl/challenge.js
    formTmpl: Ngn.formTmpl.challenge,
    url: 'http://localhost:8050/api/v1/challenge'
  }
});
