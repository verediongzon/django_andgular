(function () {
  'use strict';

angular
  .module('thinkster', [
     'thinkster.utils',
    'thinkster.config',
    'thinkster.routes',
    'thinkster.authentication',
    'thinkster.layout',
    'thinkster.posts',
    'thinkster.profiles'
   
  ]);

  angular
  .module('thinkster.config', []);

  angular
  .module('thinkster.routes', ['ngRoute']);

  angular
  .module('thinkster')
  .run(run);

  run.$inject = ['$http'];


  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }
  
})();