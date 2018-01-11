(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*!
*  angularjs-flagkit-directive 1.0.0 2018-01-11
*  An AngularJS directive for FlagKit
*  git: git+https://github.com/Naimikan/angularjs-flagkit-directive.git
*/
(function (angular) {
'use strict';
angular.module('flagkit-directive', []).directive('flag', [function () {
  function flagkitDirectiveController ($scope) {
    angular.extend(this, {
      _elementDOM: null,

      getFlagKitScope: function () {
        return $scope;
      },

      getDOMElement: function () {
        return this._elementDOM;
      },

      setDOMElement: function (elementDOM) {
        this._elementDOM = elementDOM;
      }
    });
  }

  function flagkitDirectiveLink (scope, element, attrs, controller) {
    controller.setDOMElement(element);

    var updateWidth = function () {
      if (isNaN(attrs.width)) element.css('width', attrs.width);
      else element.css('width', attrs.width + 'px');
    };

    updateWidth();

    if (angular.isDefined(attrs.width)) {
      updateWidth();

      scope.$watch(function () {
        return element[0].getAttribute('width');
      }, function () {
        updateWidth();
      });
    }
  }

  var directive = {
    restrict: 'EA',
    replace: true,
    scope: {
      fkCountry: '='
    },
    template: '<img src="{{flagSrc}}" alt="{{fkCountry}}" />',
    controller: flagkitDirectiveController,
    link: flagkitDirectiveLink
  };

  flagkitDirectiveController.$inject = ['$scope'];

  return directive;
}]);

angular.module('flagkit-directive').constant('version', {
  full: '1.0.0',
  major: 1,
  minor: 0,
  patch: 0
});

angular.module('flagkit-directive').constant('fkCountryCodes', [
  'AD',
  'AE',
  'AF',
  'AG',
  'AI',
  'AL',
  'AM',
  'AO',
  'AR',
  'AS',
  'AT',
  'AU',
  'AW',
  'AX',
  'AZ',
  'BA',
  'BB',
  'BD',
  'BE',
  'BF',
  'BG',
  'BH',
  'BI',
  'BJ',
  'BL',
  'BM',
  'BN',
  'BO',
  'BR',
  'BS',
  'BT',
  'BV',
  'BW',
  'BY',
  'BZ',
  'CA',
  'CC',
  'CD',
  'CF',
  'CG',
  'CH',
  'CI',
  'CK',
  'CL',
  'CM',
  'CN',
  'CO',
  'CR',
  'CU',
  'CV',
  'CW',
  'CX',
  'CY',
  'CZ',
  'DE',
  'DJ',
  'DK',
  'DM',
  'DO',
  'DZ',
  'EC',
  'EE',
  'EG',
  'ER',
  'ES',
  'ET',
  'EU',
  'FI',
  'FJ',
  'FK',
  'FM',
  'FO',
  'FR',
  'GA',
  'GB',
  'GB-ENG',
  'GB-NIR',
  'GB-SCT',
  'GB-WLS',
  'GB-ZET',
  'GD',
  'GE',
  'GF',
  'GG',
  'GH',
  'GI',
  'GL',
  'GM',
  'GN',
  'GP',
  'GQ',
  'GR',
  'GS',
  'GT',
  'GU',
  'GW',
  'GY',
  'HK',
  'HM',
  'HN',
  'HR',
  'HT',
  'HU',
  'ID',
  'IE',
  'IL',
  'IM',
  'IN',
  'IO',
  'IQ',
  'IR',
  'IS',
  'IT',
  'JE',
  'JM',
  'JO',
  'JP',
  'KE',
  'KG',
  'KH',
  'KI',
  'KM',
  'KN',
  'KP',
  'KR',
  'KW',
  'KY',
  'KZ',
  'LA',
  'LB',
  'LC',
  'LGBT',
  'LI',
  'LK',
  'LR',
  'LS',
  'LT',
  'LU',
  'LV',
  'LY',
  'MA',
  'MC',
  'MD',
  'ME',
  'MG',
  'MH',
  'MK',
  'ML',
  'MM',
  'MN',
  'MO',
  'MP',
  'MQ',
  'MR',
  'MS',
  'MT',
  'MU',
  'MV',
  'MW',
  'MX',
  'MY',
  'MZ',
  'NA',
  'NC',
  'NE',
  'NF',
  'NG',
  'NI',
  'NL',
  'NO',
  'NP',
  'NR',
  'NU',
  'NZ',
  'OM',
  'PA',
  'PE',
  'PF',
  'PG',
  'PH',
  'PK',
  'PL',
  'PM',
  'PN',
  'PR',
  'PS',
  'PT',
  'PW',
  'PY',
  'QA',
  'RE',
  'RO',
  'RS',
  'RU',
  'RW',
  'SA',
  'SAMI',
  'SB',
  'SC',
  'SD',
  'SE',
  'SE-JAM',
  'SE-SKA',
  'SE-VAS',
  'SEFI',
  'SG',
  'SI',
  'SJ',
  'SK',
  'SL',
  'SM',
  'SN',
  'SO',
  'SR',
  'SS',
  'ST',
  'SV',
  'SX',
  'SY',
  'SZ',
  'TC',
  'TD',
  'TF',
  'TG',
  'TH',
  'TJ',
  'TK',
  'TL',
  'TM',
  'TN',
  'TO',
  'TORN',
  'TR',
  'TT',
  'TV',
  'TW',
  'TZ',
  'UA',
  'UG',
  'UM',
  'US',
  'US-CA',
  'UY',
  'UZ',
  'VA',
  'VC',
  'VE',
  'VG',
  'VI',
  'VN',
  'VU',
  'WF',
  'WS',
  'WW',
  'WW-AFR',
  'WW-ASI',
  'WW-AUS',
  'WW-EUR',
  'WW-NAM',
  'WW-SAM',
  'XK',
  'YE',
  'YT',
  'ZA',
  'ZM',
  'ZW',
]);

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

angular.module('flagkit-directive').provider('flagKit', function () {
  var useCDN = false;

  return {
    useCDN: function (value) {
      // ToDo: check boolean

      useCDN = value;
    },
    $get: function () {
      return { useCDN: useCDN };
    }
  };
})

}(angular));
},{}]},{},[1]);
