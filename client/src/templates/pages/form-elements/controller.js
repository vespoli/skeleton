angular
  .module('skellieApp')
  .controller('FormElementsCtrl', function($scope) {
    $scope.user = {
      phone: '',
      email: '',
      firstName: '',
      lastName: '' ,
    };
  });