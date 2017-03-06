Ngn.Skills.App = new Class({

  initialize: function() {
    var container = document.getElement('body');
    var ePageHeader = new Element('div.pageHeader').inject(container);
    this.eTitle = new Element('<h1>').inject(ePageHeader);
    new Ngn.AdminMenu(container);
    new Element('div#table').inject(container);
    var m = window.location.hash.match(/#tasks-(.*)/);
    if (m) {
      this.setTitle('Задачи');
      new Ngn.Skills.Tasks(this, m[1]);
      return;
    }
    switch (window.location.hash) {
      case '#users':
        this.setTitle('Пользователи');
        new Ngn.Skills.Users();
        break;
      case '#tasks':
        this.setTitle('html', 'Задачи');
        new Ngn.Skills.Tasks(this);
        break;
      default:
        this.setTitle('Челленджи');
        new Ngn.Skills.Challenges();
        break;
    }
  },

  setTitle: function(title) {
    this.eTitle.set('html', title);
  }

});