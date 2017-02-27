Ngn.ChallengeImageDialog = new Class({
  Extends: Ngn.Dialog.RequestForm.Json,
  Implements: [Ngn.Dialog.RequestForm.Json.NoStartupRequest],
  options: {
    width: 250,
    // @requiresBefore m/js/formTmpl/challengeImage.js
    formTmpl: Ngn.formTmpl.challengeImage
  }
});

