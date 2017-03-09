Ngn.Skills.Users = new Class({

  initialize: function () {
    var grid = new Ngn.Grid({
      basePath: serverUrl,
      restBasePath: '/api/v1',
      basicBasePath: 'user'
    });
    grid.reload();
  }

});