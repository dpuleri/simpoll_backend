// Code goes here

var myApp = angular.module('app', []);
myApp.config(['$httpProvider', function($httpProvider) {
 $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
  }
]);

myApp.controller('MainCtrl', function ($scope, $http, $location){

  var url = $location.path()
  console.log('the url is' + url)

  $http({
          url: 'http://simpoll-remote.cloudapp.net/poll/563e510a886d36304f357dfd',
          method: "GET",
        }).success(function (data, status, headers, config) {
          console.log("1");
          console.log(data);
          $scope.data = data;
          $scope.option1 = $scope.data.option1;
          $scope.option2 = $scope.data.option2;
          $scope.question = $scope.data.question;


        }).error(function (data, status, headers, config) {
          console.log("Data not retrieved");
          console.log(data);
        });


  
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