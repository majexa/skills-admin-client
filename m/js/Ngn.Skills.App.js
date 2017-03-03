Ngn.Skills.App = new Class({

  initialize: function() {
    var container = document.getElement('body');
    new Ngn.AdminMenu(container);
    new Element('div#table').inject(container);
    var m = window.location.hash.match(/#tasks-(.*)/);
    if (m) {
      new Ngn.Skills.Tasks(m[1]);
      return;
    }
    switch (window.location.hash) {
      case '#users':
        new Ngn.Skills.Users();
        break;
      case '#tasks':
        new Ngn.Skills.Tasks();
        break;
      default:
        new Ngn.Skills.Challenges();
        break;

    }
  }

});