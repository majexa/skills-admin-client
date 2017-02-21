Ngn.ChallengeGrid = new Class({
  Extends: Ngn.Grid,
  options: {

    menu: [{
      title: 'Создать',
      cls: 'add',
      action: function () {
        new Ngn.ChallengeDialogNew();
      }
    }],

    requestOptions: {
      headers: {
        'Authorization': 'Bearer ' + 123
      }
    },
    basePath: 'http://localhost:8050',
    ajaxBasePath: '/api/v1/challenges',
    basicBasePath: '/challenges',
    listAction: 'items',
    listAjaxAction: 'items',

    tools: {
      delete: 'Удалить',
      edit: 'Редактировать'
    },
    toolActions: {
      edit: function (row, opt) {
        new Ngn.ChallengeDialogEdit({
          width: 300,
          url: 'http://localhost:8050/api/v1/challenges/json_edit?id=' + row.id,
          onOkClose: function () {
            this.reload(row.id);
          }.bind(this)
        });
      }
    },

    formatters: {
      tasks: function (v) {
        return v.title ? 'Название: ' + v.title : '';
      }
    }
  }
});