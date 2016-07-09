
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

    loadTemplate: function(id) {
      var ele = prop.parentName;
      $(ele).slideUp('slow', function(){
        $(ele).load('tpls/' + id + '.html', function() {
          $(ele).slideDown('slow');
        });
      });

    },
    setTab: function(id) {
      var ele = '.container #tab li ',
          target = '.container #tab #' + id;
      if($(ele).hasClass('active')) {
        $(ele).removeClass('active');
      }
      $(target).addClass('active');
    }
  };

  window._site[moduleName] = window._site[moduleName] || {};
  window._site[moduleName].V =
  {
    loadTemplate: method.loadTemplate,
    setTab:method.setTab,

  };
}(jQuery,window));
