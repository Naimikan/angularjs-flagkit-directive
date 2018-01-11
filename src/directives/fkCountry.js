angular.module('flagkit-directive').directive('fkCountry', ['fkCountryCodes', 'flagKit', function (fkCountryCodes, flagKit) {
  function flagkitCountryDirectiveLink (scope, element, attrs, controller) {
    var flagkitScope = controller.getFlagKitScope();

    flagkitScope.$watch('fkCountry', function (countryCode) {
      console.log(countryCode);

      if (angular.isDefined(countryCode)) {
        if (fkCountryCodes.indexOf(countryCode) !== -1) {
          if (flagKit.useCDN) flagkitScope.flagSrc = '';
          else flagkitScope.flagSrc = '/assets/svg/' + countryCode.toUpperCase() + '.svg';
        } else throw new Error('Invalid Country Code');
      }
    }, true);
  }

  var directive = {
    restrict: 'A',
    scope: false,
    replace: false,
    require: '?^flag',
    link: flagkitCountryDirectiveLink
  };

  return directive;
}]);
