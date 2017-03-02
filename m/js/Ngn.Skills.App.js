Ngn.Skills.App = new Class({

  initialize: function() {
    var container = document.getElement('body');
    new Ngn.AdminMenu(container);
    new Element('div#table').inject(container);
    switch (window.location.hash) {
      case '#users':
        new Ngn.Skills.Users();
        break;
      case '#tasks':
        var grid = new Ngn.Grid({
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
        break;
      default:
        new Ngn.Skills.Challenges();
        break;

    }
  }

});