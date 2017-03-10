Ngn.Skills.Users = new Class({

  initialize: function () {
    var grid = new Ngn.Grid({
      basePath: serverUrl,
      restBasePath: '/api/v1',
      basicBasePath: 'user',
      tools: {
        edit: 'Редактировать',
      },
      toolAction: {
        edit: function (row, btn) {
          console.log('!');
          // new Ngn.Dialog.RequestForm(Object.merge({
          //   id: 'dlgEdit' + row.id,
          //   url: this.options.basePath + this.options.restBasePath + '/' + row.id,
          //   title: 'Редактирование',
          //   onOkClose: function () {
          //     this.reload(row.id);
          //   }.bind(this)
          // }, Ngn.Grid.defaultDialogOpts));
        }
      },
    });
    grid.reload();
  }

});