Ngn.ChallengeGrid = new Class({
  Extends: Ngn.Grid,
  options: {

    menu: [{
      title: 'Создать',
      cls: 'add',
      action: function (grid) {
        new Ngn.ChallengeDialogNew({
          onOkClose: function () {
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
      edit: 'Редактировать',
      view: 'Предпросмотр',
    },
    toolActions: {
      edit: function (row, opt) {
        new Ngn.ChallengeDialogEdit({
          width: 300,
          url: serverUrl + '/api/v1/challenge/' + row.id,
          onOkClose: function () {//
            this.reload(row.id);
          }.bind(this)
        });
      },
      view: function (row, opt) {
        let frame = new Ngn.Dialog.Iframe({
          title: row.data.title,
          iframeUrl: window.iframeUrl,
          iframeStyles: {
             height: 450
          },
          width: 320
        });
        frame.eIframe.onload = function () {
          frame.eIframe.contentWindow.postMessage({
            challengeId: row.id
          }, '*');
        };
      }
    },
    formatters: {
      tasks: function (v) {
        return v.title ? 'Название: ' + v.title : '';
      },
      title: function (title, challengeId) {
        return '<a href="#tasks-' + challengeId + '" onClick="window.location.reload()">' + title + '</a>';
      }
    }
  }

});