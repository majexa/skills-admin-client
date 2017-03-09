Ngn.Skills.Tasks = new Class({

  initialize: function (app, challengeId) {
    if (!challengeId) throw new Error('challengeId not defined');

    // -----------
    new Request.JSON({
      url: apiUrl + '/challenge/' + challengeId,
      onComplete: function(challange) {
        app.setTitle('Задачи челленджа «' + challange.title + '»');
      }
    }).get();
    // -----------

    var grid = new Ngn.Skills.Tasks.Grid({
      challengeId: challengeId,
      basePath: serverUrl,
      restBasePath: '/api/v1',
      basicBasePath: 'task',
      // ================ TOOL =================
      tools: {
        delete: 'Удалить'
      },
      // ================ MENU =================
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
              onOkClose: function () {
                grid.reload();
              }
            },
            makeStartupRequest: function () {
              this.urlResponse({
                challengeId: challengeId
              });
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
