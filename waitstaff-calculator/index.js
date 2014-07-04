angular.module('myApp', [])
.controller('FormCtrl', function($scope, $attrs) {

    $scope.subtotal = 0.00;
    $scope.tip = 0.00;
    $scope.total = 0.00;
    $scope.tip_total = 0.00;
    $scope.meal_count = 0;
    $scope.average = 0.00;

    $scope.submit = function() {
        if( $scope.base >= 0 && $scope.tipPercentage >= 0 &&
            $scope.tax >= 0 ) {

            var base = $scope.base;
            var tax = $scope.tax;
            var tipPercentage = $scope.tipPercentage;

            var subtotal = ( base + ( base * ( tax / 100 ) ) ).toFixed(2);
            $scope.subtotal = subtotal;
            var tip = ( base * ( tipPercentage / 100 ) ).toFixed(2);
            $scope.tip = tip;
            $scope.total = ( parseInt(tip) + parseInt(subtotal) ).toFixed(2);

            $scope.tip_total = ( parseInt($scope.tip_total) + parseInt(tip) ).toFixed(2);
            $scope.meal_count = ( parseInt($scope.meal_count) + 1 ).toFixed(0);
            $scope.average = ( parseInt($scope.tip_total) / 
                               parseInt($scope.meal_count) ).toFixed(2);

            $scope.base = undefined;
            $scope.tax = undefined;
            $scope.tipPercentage = undefined;
        } else {
            alert("Please fill all input fields with numbers");
            $scope.base = undefined;
            $scope.tax = undefined;
            $scope.tipPercentage = undefined;
        }
    };
    $scope.cancel = function() {
        $scope.base = "";
        $scope.tax = "";
        $scope.tipPercentage = "";
    };
    $scope.reset = function() {
        $scope.base = undefined;
        $scope.tax = undefined;
        $scope.tipPercentage = undefined;
        $scope.subtotal = 0.00;
        $scope.tip = 0.00;
        $scope.total = 0.00;
        $scope.tip_total = 0.00;
        $scope.meal_count = 0;
        $scope.average = 0.00;
    };
});