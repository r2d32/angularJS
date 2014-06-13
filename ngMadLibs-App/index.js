angular.module('myApp', [])
.controller('FormCtrl', function($scope, $attrs) {

    $scope.submit = function() {
        $scope.submitted = !$scope.submitted;
        $scope.male_name_s = $scope.male_name;
        $scope.dirty_task_s = $scope.dirty_task;
        $scope.obnoxious_celebrity_s = $scope.obnoxious_celebrity;
        $scope.job_title_s = $scope.job_title;
        $scope.celebrity_s = $scope.celebrity;
        $scope.huge_number_s = $scope.huge_number;
        $scope.tedious_task_s = $scope.tedious_task;
        $scope.useless_skill_s = $scope.useless_skill;
        $scope.adjective_s = $scope.adjective; 

        $scope.male_name_s = "";
        $scope.dirty_task = "";
        $scope.obnoxious_celebrity = "";
        $scope.job_title = "";
        $scope.celebrity = "";
        $scope.huge_number = "";
        $scope.tedious_task = "";
        $scope.useless_skill = "";
        $scope.adjective = "";
    };

    $scope.numberLimitT = 's';
    $scope.submitted = false;
});


