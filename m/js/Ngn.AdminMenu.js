Ngn.AdminMenu = new Class({

  initialize: function(container) {
    var eMenu = new Element('div.menu').inject(container);

    new Element('a.btn', {
      html: '<span>Челленджи</span>',
      href: '#challanges'
    }).inject(eMenu).addEvent('click', function () {
      window.location.reload(true);
    });

    new Element('a.btn', {
      html: '<span>Пользователи</span>',
      href: '#users'
    }).inject(eMenu).addEvent('click', function () {
      window.location.reload(true);
    });

    var btnLogout = new Element('a.btn.logout', {
      html: '<span>Выйти</span>',
      href: '#'
    }).inject(eMenu);

    btnLogout.addEvent('click', function(e) {
      e.preventDefault();
      Ngn.Storage.remove('token');
      window.location.reload();
    });

  }

});
