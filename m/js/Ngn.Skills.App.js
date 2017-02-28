Ngn.Skills.App = new Class({

  initialize: function() {
    var container = document.getElement('body');
    new Ngn.AdminMenu(container);
    //
    new Element('div#table').inject(container);
    if (!window.location.hash || window.location.hash == '#challanges') {
      new Ngn.Skills.Challanges();
    } else if (window.location.hash == '#users') {
      new Ngn.Skills.Users();
    }
  }

});