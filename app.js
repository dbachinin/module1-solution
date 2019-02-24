(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch_menu = "";
  $scope.LunchCheckState = "";
  $scope.textColorClass = "";
  $scope.borderColor = '';

  $scope.countLunchItems = () => {
    $scope.LunchCheckState = countLunchItems($scope.lunch_menu);
  };
  function countLunchItems(items) {
    let items_count = items.split(',').filter((val) => {return !val.match(/^ *$/);}).length;
    let out = "";
    if (items_count == 0) {
      $scope.textColorClass = "text-danger";
      out = 'Please enter data first!';
      $scope.borderColor = 'red';
    }else{
      $scope.borderColor = 'green';
      if (items_count <= 3) {
        out = 'Enjoy';
        $scope.textColorClass = "text-info";
      }else{
        out = 'Too much';
        $scope.textColorClass = "text-info";
      }
    }
    return out
  }
}

})();