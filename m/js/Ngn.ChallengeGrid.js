Ngn.ChallengeGrid = new Class({
  Extends: Ngn.Grid,
  options: {

    menu: [{
      title: 'Создать',
      cls: 'add',
      action: function (grid) {
        new Ngn.ChallengeDialogNew({
          onOkClose: function() {
            console.log(grid);
            grid.reload();
          }
        });
      }
    }],
    requestOptions: {
      headers: {
        'Authorization': 'Bearer ' + 123
      }
    },
    basePath: serverUrl,
    restBasePath: '/api/v1',
    basicBasePath: 'challenge',
    tools: {
      delete: 'Удалить',
      edit: 'Редактировать'
    },
    toolActions: {
      edit: function (row, opt) {
        new Ngn.ChallengeDialogEdit({
          width: 300,
          url: serverUrl + '/api/v1/challenge/' + row.id,
          onOkClose: function () {
            this.reload(row.id);
          }.bind(this)
        });
      }
    },
    formatters: {
      tasks: function (v) {
        return v.title ? 'Название: ' + v.title : '';
      },
      title: function(title, challengeId) {
        return '<a href="#tasks-' + challengeId+'" target="_blank">' + title + '</a>';
      }
    }
  }

});