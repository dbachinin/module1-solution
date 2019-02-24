(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch_menu = "";
  $scope.LunchCheckState = "";
  $scope.textColorClass = "";
  $scope.borderColor = 'red';

  $scope.countLunchItems = () => {
    $scope.LunchCheckState = countLunchItems($scope.lunch_menu);
  };
  function countLunchItems(items) {
    let items_count = items.split(',').filter((val) => {return val != '';}).length;
    let out = "";
    $scope.borderColor = 'green';
    if (items_count <= 3) {
      out = 'Enjoy';
      $scope.textColorClass = "text-info";
    }else{
      out = 'Too much';
      $scope.textColorClass = "text-danger";
    }
    return out
  }
}

})();