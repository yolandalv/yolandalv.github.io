
;(function($,window,undefined){
  'use strict';
  var moduleName = 'index',
      module = window._site[moduleName] || {},
      M = module.M || {},
      V = module.V || {},
      C = module.C || {};
  var prop = {
    parentName: '.container .content '
  };
  var method = {
    btnClick: function(obj) {
      var id = obj.id;
      if (!$(obj).hasClass('active')) {
        V.setTab(id);
        V.loadTemplate(id);
      }

    },
    loadTemplate: function(id) {
      var ele = prop.parentName;
      $(ele).load('tpls/' + id + '.html');
    }
  };
  var init = (function() {
    V.setTab('about_me');
    method.loadTemplate('about_me');
  }());

  window._site[moduleName] =window._site[moduleName] ||{};
  window._site[moduleName].C =
  {
    btnClick: method.btnClick
  };
  window.site[moduleName] = window._site[moduleName].C;
}(jQuery,window));
