angular
  .module('skellieApp')
  .controller('FormElementsCtrl', function($scope) {
    $scope.aliens = [
      'ET',
      'Alf',
      'Predator',
      'Uncle Martin',
      'Paul',
      'Gredo',
      'Yoda',
      'Chewbacca',
      'Mr. Spock'
    ];
    $scope.user = {
      phone: '',
      email: '',
      firstName: '',
      lastName: '' ,
      alien: ''
    };
  });