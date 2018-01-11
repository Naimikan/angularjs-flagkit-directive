(function (angular, undefined) {
  'use strict';

  angular.module('app', ['flagkit-directive'])

  .controller('IndexController', ['$scope', '$timeout', 'version', function ($scope, $timeout, version) {
    $scope.fkCountry = 'US';
    $scope.fkWidth = '100px';

    $timeout(function () {
      $scope.fkCountry = 'CA';
      $scope.fkWidth = '450px';
    }, 3000, true);
  }]);
})(window.angular);
