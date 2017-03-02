Ngn.AdminMenu = new Class({

  initialize: function (container) {
    this.eMenu = new Element('div.menu').inject(container);
    this.createButton('Челленджи', 'challenges');
    this.createButton('Пользователи', 'users', 'user');
    this.createButton('Задачи', 'tasks');
    this.createLogoutButton();
  },

  createLogoutButton: function () {
    var btnLogout = new Element('button.smIcons.btn.logout', {
      html: '<i></i>Выйти',
      href: '#'
    }).inject(this.eMenu);
    btnLogout.addEvent('click', function (e) {
      e.preventDefault();
      Ngn.Storage.remove('token');
      window.location.reload();
    });
  },

  createButton: function (title, name, icon) {
    if (!icon) icon = 'list';
    new Element('button.smIcons.btn.' + icon, {
      html: '<i></i>' + title,
    }).inject(this.eMenu).addEvent('click', function () {
      window.location = '#' + name;
      window.location.reload(true);
    });
  }

});
