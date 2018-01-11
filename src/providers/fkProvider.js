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
