
var myModule = angular.module('MyApp', ['ngAnimate']);
myModule.controller('UsersCtrl', ['$scope', function($scope) {
  $scope.workouts = [
    { "name": "Entrenamiento Libre", "exercises": ["taca1","taca2"]},
  ];

  $scope.openAccordion = function($scope) {
    console.log(this.class);
  };
}]);