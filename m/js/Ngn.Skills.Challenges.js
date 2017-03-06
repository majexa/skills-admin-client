Ngn.Skills.Challenges = new Class({

  initialize: function() {
    Ngn.Grid.defaultDialogOpts = {
      width: 250
    };
    var imageViewer = function(grid) {
      var id;
      for (id in grid.esItems) {
        (function (id) {
          var eImagePreview = grid.esItems[id].getElement('.imagePreview');
          if (!eImagePreview) {
            return false;
          }
          eImagePreview.addEvent('click', function () {
            var url = grid.getLink() + '/' + id + '/uploadImage';
            console.log(url);
            new Ngn.ChallengeImageDialog({
              url: url
            });
            return false;
          });
        })(id);
      }
    };
    var grid = new Ngn.ChallengeGrid({
//    onReloadComplete: function () {
//      imageViewer(grid);
//    },
      toolAction: {
        edit: function (row, btn) {
          new Ngn.Dialog.RequestForm(Object.merge({
            id: 'dlgEdit' + row.id,
            url: this.options.basePath + this.options.restBasePath + '/' + row.id,
            title: 'Редактирование',
            onOkClose: function () {
              this.reload(row.id);
            }.bind(this)
          }, Ngn.Grid.defaultDialogOpts));
        }
      },
      formatters: {
        dt: function (v) {
          return Date.parse(v).format('%d %B <small>(%A)</small>');
          //return days[d.getDay()] + '. ' + d.format('%d.%m.%Y %H:%M');
        },
        image: function (v) {
          return '<div class="imagePreview" title="Upload Logo..."></div>';
        },
        periodType: function (periodTtype) {
          var icon;
          switch (periodTtype) {
            case 'userStart':
              icon = 'user';
              break;
            case 'partial':
              icon = 'slices';
              break;
            default:
              icon = 'local';
          }
          return '<span class="smIcons ' + icon + '"><i></i><small>' + periodTtype + '</small></span>'
        }
      }
    });
    grid.reload();
  }

});