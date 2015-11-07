// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope, $http){

  $http({
          url: 'http://simpoll-remote.cloudapp.net/poll/563e510a886d36304f357dfd',
          method: "GET",
        }).success(function (data, status, headers, config) {
          console.log(data);

        }).error(function (data, status, headers, config) {
          
          console.log("Data not retrieved");
          console.log(data);
        });

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