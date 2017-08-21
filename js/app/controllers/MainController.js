function MainController($scope) {
  $scope.name = 'Some Name';
}

angular
  .module('app')
  .controller('MainController', MainController);