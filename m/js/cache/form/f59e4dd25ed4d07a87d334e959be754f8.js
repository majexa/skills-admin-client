Ngn.Frm.init.f59e4dd25ed4d07a87d334e959be754f8 = function() {

var id = 'f59e4dd25ed4d07a87d334e959be754f8';
Ngn.Form.forms[id].eForm.getElements('.type_fieldList').each(function(el){
  new Ngn.Frm.FieldSet(Ngn.Form.forms[id], el, {'rowElementSelector': '.hgrp'});
});

// -- jsMaxLength -- 

Ngn.Frm.maxLength($('f59e4dd25ed4d07a87d334e959be754f8'), 1000);

};
