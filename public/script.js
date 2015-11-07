// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  console.log("HEY");
  // $http({
  //         url: $rootScope.paths.logoutPath,
  //         method: "POST",
  //         data: {
  //           email: $scope.user.email
  //         },
  //         headers: Utility.headers
  //       }).success(function (data, status, headers, config) {

  //       }).error(function (data, status, headers, config) {
  //         Utility.flash.error("There was an error connecting to the server.");
  //         console.error(data);
  //       });

  $scope.question = "Hey dad, I made it";
  
  $scope.addItem = function(){
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
    }
  }

    
  
});

/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 * 
 * *********************/