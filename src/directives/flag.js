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
