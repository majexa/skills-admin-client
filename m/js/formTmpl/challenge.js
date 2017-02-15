Ngn.toObj('Ngn.formTmpl.challenge', '<div class="apeform"><form action="" id="fb5873d5f20f9f8b9981406559df1bf41" method="post"><div class="element row_title type_text name_title"><p class="label"><span class="ttl">Название задачи</span><span>:</span></p><div class="field-wrapper"><input size="40" type="text" id="titlei" maxlength="255" name="title" value="<?=t.title?>" /></div><div class="help"></div><div class="clear"></div></div><div class="element row_price type_price name_price"><p class="label"><span class="ttl">Цена</span><span>:</span></p><div class="field-wrapper"><input size="40" type="text" id="pricei" maxlength="11" name="price" value="<?=t.price?>" /></div><div class="help"></div><div class="clear"></div></div><div class="element row_type type_select name_type"><p class="label"><span class="ttl">Тип</span><span>:</span></p><div class="field-wrapper"><select name="type" maxlength="255" name="type" value="{?=t.type?}" id="typei">\
	<option value="range">Период</option>\
	<option value="timed">По таймеру</option></select></div><div class="help"></div><div class="clear"></div></div><!-- Open fields group depth={1}, type={header}, id={el6} -->\
<div class="clear hgrp hgrp_el6 type_header"><h3>Задачи</h3><div class="fieldSet type_fieldList fieldSet_tasks"><!-- Open fields group depth={2}, type={header}, id={el8} -->\
<div class="clear hgrp hgrp_el8 type_header"><div class="element row_tasks-0 type_text name_tasks"><div class="field-wrapper"><input size="40" type="text" id="tasks-0i" maxlength="255" name="tasks[0]" value="<?=t.tasks[0]?>" /></div><div class="help"></div><div class="clear"></div></div></div><!-- Close fields group depth={2} () --><div class="clear"><!-- --></div></div></div><!-- Close fields group depth={1} () --><div class="clear"></div>\
<div id="fb5873d5f20f9f8b9981406559df1bf41jsInline" style="display:none">\
var id = \'fb5873d5f20f9f8b9981406559df1bf41\';\
Ngn.Form.forms[id].eForm.getElements(\'.type_fieldList\').each(function(el){\
  new Ngn.Frm.FieldSet(Ngn.Form.forms[id], el, {\'rowElementSelector\': \'.hgrp\'});\
});\
\
// -- jsInlineUpload -- \
\
(function() {\
  Ngn.Form.forms.fb5873d5f20f9f8b9981406559df1bf41.initUpload();\
}).delay(100);\
</div></form></div>');
