angular.module('myApp', [])
    .constant('MALE_NAME', 'Male Name')
    .run(function($rootScope, MALE_NAME) {
    $rootScope.male_name = MALE_NAME;
    })
    .controller('MyCtrl', function($scope,$rootScope) {
        $scope.male_name = $rootScope.male_name;
    });

