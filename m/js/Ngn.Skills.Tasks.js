Ngn.Skills.Tasks = new Class({

  initialize: function(challengeId) {
    if (!challengeId) throw new Error('challengeId not defined');
    console.log(challengeId);
    var grid = new Ngn.Skills.Tasks.Grid({
      challengeId: challengeId,
      basePath: serverUrl,
      restBasePath: '/api/v1',
      basicBasePath: 'task',
      // ============================= MENU ===============================
      menu: [{
        title: 'Создать',
        cls: 'add',
        action: function (grid) {
          var dialog = new Class({
            Extends: Ngn.Dialog.RequestForm.Json,
            Implements: [Ngn.Dialog.RequestForm.Json.NoStartupRequest],
            options: {
              title: 'Создание',
              width: 250,
              // @requiresBefore m/js/formTmpl/task.js
              formTmpl: Ngn.formTmpl.task,
              url: serverUrl + '/api/v1/task',
              onOkClose: function() {
                grid.reload();
              }
            }
          });
          new dialog();
        }
      }]
    });
    grid.reload();
  }

});

Ngn.Skills.Tasks.Grid = new Class({
  Extends: Ngn.Grid,
  _getListLink: function (ajax) {
    if (!ajax) {
      throw new Error('non ajax part is not realized');
    }
    return this.options.restBasePath + '/tasks/challenge' + this.options.challengeId;
  }
});
